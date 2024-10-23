import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Filter 단위 테스트", () => {
  it("필터 버튼을 누르면 필터 창이 스크린에 나온다", async () => {
    const user = userEvent.setup();
    const buttonElement = screen.getByRole("button", { name: "필터" });
    await user.click(buttonElement);

    expect(screen.getByText("검색")).toBeInTheDocument();
  });
});

//https://medium.com/@ghewadesumit/how-to-test-react-query-hook-using-jest-11d01a0a0acd
