document.getElementById('memoryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('status').textContent = '📤 جاري معالجة الذكرى...';
  setTimeout(() => {
    document.getElementById('status').textContent = '✅ تم إنشاء الذكرى بنجاح! سيتم إرسالها إليك قريبًا.';
  }, 2000);
});