"use server";

export async function movieApi<T>({
  url,
  method,
  params = {},
  revalidate = 0,
}: {
  url: string;
  params?: Record<string, any>;
  method: "GET" | "POST";
  revalidate?: number;
}): Promise<T> {
  try {
    const defaultParams = {
      ...params,
      language: "ko",
    };

    const getUrl = `${process.env.TDMB_API_URL}${url}?${method == "GET" ? getParams(defaultParams) : ""}`;

    const fetchInit: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.TDMB_API_TOKEN}`,
      },
    };

    if (revalidate) {
      fetchInit.next = { revalidate };
    }

    if (!revalidate) {
      fetchInit.cache = "no-cache";
    }

    if (method == "POST") {
      fetchInit.body = JSON.stringify(params);
    }

    const result = await Promise.race([
      fetch(getUrl, fetchInit),
      createFetchTimeout(new AbortController()),
    ]);

    if (!(result instanceof Response)) {
      throw new Error("Something went wrong");
    }

    const data = await result.json();

    // 에러 응답을 확인하고 예외 처리
    if ("success" in data && !data.success) {
      throw new Error(
        `Error: ${data.status_message} (Code: ${data.status_code})`,
      );
    }

    return data as T;
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
}

function getParams(params: Record<string, any>) {
  const resultParams = new URLSearchParams();
  for (let param in params) {
    if (
      params[param] != undefined &&
      (params[param] !== "" || typeof params[param] === "number")
    ) {
      if (Array.isArray(params[param])) {
        params[param].forEach((el: string) => {
          resultParams.append(`${param}`, el);
        });
      } else {
        resultParams.append(`${param}`, params[param]);
      }
    }
  }
  return resultParams;
}

function createFetchTimeout(controller: AbortController) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      controller.abort();
      reject(new Error("Time Out"));
    }, 5000);
  });
}
