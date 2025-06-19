// 页面导航功能
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.pages-nav a');
    const prototypeFrame = document.getElementById('prototype-frame');
    
    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新活动链接样式
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 获取目标页面ID并加载相应页面
            const pageId = this.getAttribute('href').substring(1);
            prototypeFrame.src = `pages/${pageId}.html`;
        });
    });
}); 