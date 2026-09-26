// التفاعل عند إرسال نموذج التواصل
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
    
    // عرض رسالة تأكيد للمستخدم
    alert('شكراً لتواصلك مع زين ستيل! تم استلام طلبك بنجاح وسنتواصل معك قريباً.');
    
    // تفريغ الحقول بعد الإرسال
    this.reset();
});
