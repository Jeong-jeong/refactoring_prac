import { calcAmount, playFor, volumeCreditsFor, format } from "./utils";

export function statement(invoice) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let aPerformance of invoice.performances) {
    // 추출한 volumeCreditsFor 함수로 값을 누적
    volumeCredits += volumeCreditsFor(aPerformance);

    // 청구 내역을 출력한다.
    result += `${playFor(aPerformance).name}: ${format(calcAmount(aPerformance) / 100)} ${aPerformance.audience}석\n`;
    totalAmount += calcAmount(aPerformance);
  }
  result += `총액 ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;

  return result;
}
