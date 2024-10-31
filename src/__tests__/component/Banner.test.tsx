import { act, fireEvent, render, screen } from "@testing-library/react";
import Banner from "@/component/banner/Banner";

describe("Banner Component", () => {
  it("interval 설정에 따라 아이템이 순서대로 보여지는지", () => {
    jest.useFakeTimers();

    render(
      <Banner itemSize={3} interval={2000}>
        <div className={"w-full h-2/4"}>Item 1</div>
        <div className={"w-full h-2/4"}>Item 2</div>
        <div className={"w-full h-2/4"}>Item 3</div>
      </Banner>,
    );

    expect(screen.getByText("Item 1")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByText("Item 2")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 3")).toHaveAttribute("aria-hidden", "true");

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText("Item 1")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 2")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByText("Item 3")).toHaveAttribute("aria-hidden", "true");

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText("Item 1")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 2")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 3")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText("Item 1")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByText("Item 2")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 3")).toHaveAttribute("aria-hidden", "true");
  });

  it("mouse down으로 슬라이드가 멈추고 다시 시작되는지 확인", () => {
    jest.useFakeTimers();

    render(
      <Banner itemSize={3} interval={2000}>
        <div className={"w-full h-2/4"}>Item 1</div>
        <div className={"w-full h-2/4"}>Item 2</div>
        <div className={"w-full h-2/4"}>Item 3</div>
      </Banner>,
    );

    act(() => {
      fireEvent.mouseDown(screen.getByText("Item 1"));
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText("Item 1")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByText("Item 2")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 3")).toHaveAttribute("aria-hidden", "true");

    act(() => {
      fireEvent.mouseUp(screen.getByText("Item 1"));
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText("Item 1")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Item 2")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByText("Item 3")).toHaveAttribute("aria-hidden", "true");
  });

  it("마우스로 드래그하면 다음 혹은 전에 배너 아이템이 보여지는지", () => {
    jest.useFakeTimers();

    render(
      <Banner itemSize={3} interval={0}>
        <div className={"w-full h-[500px]"}>Item 1</div>
        <div className={"w-full h-[500px]"}>Item 2</div>
        <div className={"w-full h-[500px]"}>Item 3</div>
      </Banner>,
    );

    expect(screen.getByText("Item 1")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );

    act(() => {
      fireEvent.mouseDown(screen.getByText("Item 1"), { clientX: 300 });
    });

    act(() => {
      fireEvent.mouseMove(screen.getByText("Item 1"), { clientX: 50 });
    });

    act(() => {
      fireEvent.mouseUp(screen.getByText("Item 1"));
    });

    expect(screen.getByText("Item 2")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );

    act(() => {
      fireEvent.mouseDown(screen.getByText("Item 2"), { clientX: 300 });
    });

    act(() => {
      fireEvent.mouseMove(screen.getByText("Item 2"), { clientX: 50 });
    });

    act(() => {
      fireEvent.mouseUp(screen.getByText("Item 2"));
    });

    expect(screen.getByText("Item 3")).not.toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});
