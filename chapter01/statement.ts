import { createStatementData } from './createStatementData';

export function statement(invoice, plays) {
  const statementData: any = createStatementData(invoice, plays);
  return renderPlainText(statementData, plays);
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',
    minimumFractionDigits: 2
  }).format(aNumber / 100);
}

function renderPlainText(data: any, plays: any) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    // 注文の内訳を出力
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}
