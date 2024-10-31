import StarScore from "@/component/StarScore";
import { render, screen } from "@testing-library/react";

describe("StarScore", () => {
  it("정수 점수에 따라 별이 제대로 렌더링 되는지", () => {
    render(<StarScore score={8} size={24} />);

    // 점수 8은 별 4개, 반개 없음
    const filledStars = screen.getAllByTestId("filled-star");
    const emptyStars = screen.getAllByTestId("empty-star");

    expect(filledStars.length).toBe(4);
    expect(emptyStars.length).toBe(5);
  });

  it("소수점 별이 제대로 렌더링 되는지", () => {
    render(<StarScore score={5.3} size={24} />);

    // 점수 8은 별 4개, 반개 없음
    const filledStars = screen.getAllByTestId("filled-star");
    const halfStars = screen.getAllByTestId("half-star");
    const emptyStars = screen.getAllByTestId("empty-star");

    expect(filledStars.length).toBe(2);
    expect(halfStars.length).toBe(1);
    expect(emptyStars.length).toBe(5);
  });
});
