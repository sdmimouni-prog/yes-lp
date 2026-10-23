(() => {
  const week = document.querySelector('#pregnancy-week');
  const hint = document.querySelector('#month-hint');
  for (let value = 1; value <= 42; value++) {
    const option = document.createElement('option');
    option.value = String(value);
    option.textContent = `السيمانة ${value}`;
    week.append(option);
  }
  const month = document.querySelector('#pregnancy-month');
  week.addEventListener('change', () => {
    month.value = week.value ? String(Math.ceil(Number(week.value) / 4.345)) : ''; 
    const months = (Number(week.value) / 4.345).toLocaleString('ar-MA', { maximumFractionDigits: 1 });
    hint.textContent = week.value ? `تقريباً ${months} شهر — تحويل تقريبي من السيمانات` : 'غادي يبان ليك العمر التقريبي بالشهور';
  });
  month.addEventListener('change', () => {
    week.value = month.value ? String(Math.max(1, Math.min(42, Math.round((Number(month.value) - 0.5) * 4.345)))) : '';
    hint.textContent = month.value ? `تقريباً السيمانة ${week.value} — حددي السيمانة بالضبط إلا كنتي عارفاها` : 'غادي يبان ليك العمر التقريبي بالشهور';
  });
  document.querySelector('#gift-form').addEventListener('submit', event => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    status.classList.add('notice');
    status.textContent = 'هاد النسخة غير للمعاينة. الطلب ما تسيفطش: خاص ربط الفورمولير بـ Google Sheets باش يتسجل.';
  });
})();
