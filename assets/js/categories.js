/**
 * categories.js - Quản lý chế độ hiển thị categories VÀ LỌC MENU
 */

// Khởi tạo state
let isExpanded = false; // false = lướt ngang, true = wrap xuống dòng

// Hàm khởi tạo categories với chức năng expand/collapse VÀ LỌC
function initCategoriesWithToggle() {
    const categoriesContainer = document.getElementById('menuCategories');
    if (!categoriesContainer) {
        console.error('Không tìm thấy #menuCategories');
        return;
    }
    
    // Lấy dữ liệu categories từ biến toàn cục
    if (typeof menuCategories === 'undefined') {
        console.error('Biến menuCategories chưa được định nghĩa');
        return;
    }
    
    // Tạo HTML cho categories
    let categoriesHTML = `
        <button class="category-btn alle-btn active" data-category="all">
            Alle
        </button>
    `;
    
    menuCategories.forEach(category => {
        categoriesHTML += `
            <button class="category-btn" data-category="${category.id}">
                ${category.title}
            </button>
        `;
    });
    
    // Tạo wrapper mới
    const wrapper = document.createElement('div');
    wrapper.className = 'categories-container';
    
    // Tạo nút toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'expand-toggle-btn';
    toggleBtn.innerHTML = `
        <span class="toggle-icon">→</span>
        <span class="toggle-text">Alle Kategorien anzeigen</span>
    `;
    
    // Tạo container cho scroll mode
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'menu-categories-scroll';
    scrollContainer.innerHTML = categoriesHTML;
    
    // Tạo container cho wrap mode
    const wrapContainer = document.createElement('div');
    wrapContainer.className = 'menu-categories-wrap hidden';
    wrapContainer.innerHTML = categoriesHTML;
    
    // Dọn dẹp container cũ và thêm mới
    categoriesContainer.innerHTML = '';
    categoriesContainer.appendChild(wrapper);
    wrapper.appendChild(toggleBtn);
    wrapper.appendChild(scrollContainer);
    wrapper.appendChild(wrapContainer);
    
    // === HÀM LỌC MENU CHÍNH ===
    function filterMenuByCategory(categoryId) {
        console.log('Lọc theo category:', categoryId);
        
        // Cập nhật biến activeCategory toàn cục
        window.activeCategory = categoryId;
        
        // Gọi hàm renderMenu nếu có
        if (typeof renderMenu === 'function') {
            renderMenu();
        } else if (typeof window.renderMenu === 'function') {
            window.renderMenu();
        } else {
            console.warn('Hàm renderMenu không tồn tại');
            // Thử tìm và gọi lại
            if (typeof window.updateMenuDisplay === 'function') {
                window.updateMenuDisplay(categoryId);
            }
        }
        
        // Dispatch event cho các component khác
        window.dispatchEvent(new CustomEvent('categoryChange', { 
            detail: { category: categoryId } 
        }));
    }
    
    // === XỬ LÝ CLICK CATEGORY ===
    function handleCategoryClick(e) {
        const clickedBtn = e.currentTarget;
        const categoryId = clickedBtn.getAttribute('data-category');
        
        if (!categoryId) return;
        
        // Cập nhật active state cho tất cả buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedBtn.classList.add('active');
        
        // Lọc menu
        filterMenuByCategory(categoryId);
    }
    
    // === GÁN SỰ KIỆN CHO TẤT CẢ CATEGORY BUTTONS ===
    function bindCategoryEvents() {
        const allBtns = document.querySelectorAll('.category-btn');
        console.log('Tìm thấy', allBtns.length, 'category buttons');
        
        allBtns.forEach(btn => {
            // Gỡ event cũ để tránh trùng lặp
            btn.removeEventListener('click', handleCategoryClick);
            // Gắn event mới
            btn.addEventListener('click', handleCategoryClick);
        });
    }
    
    // === TOGGLE GIỮA 2 CHẾ ĐỘ ===
    function toggleCategoriesMode() {
        isExpanded = !isExpanded;
        
        const scrollDiv = document.querySelector('.menu-categories-scroll');
        const wrapDiv = document.querySelector('.menu-categories-wrap');
        const toggleText = document.querySelector('.toggle-text');
        const toggleIcon = document.querySelector('.toggle-icon');
        
        if (isExpanded) {
            scrollDiv.classList.add('hidden');
            wrapDiv.classList.remove('hidden');
            if (toggleText) toggleText.textContent = 'Kategorien einklappen';
            if (toggleIcon) toggleIcon.innerHTML = '←';
        } else {
            scrollDiv.classList.remove('hidden');
            wrapDiv.classList.add('hidden');
            if (toggleText) toggleText.textContent = 'Alle Kategorien anzeigen';
            if (toggleIcon) toggleIcon.innerHTML = '→';
        }
        
        // Sau khi toggle, cần gắn lại sự kiện cho các button mới hiện
        bindCategoryEvents();
    }
    
    // Gắn sự kiện cho nút toggle
    toggleBtn.addEventListener('click', toggleCategoriesMode);
    
    // Gắn sự kiện cho category buttons
    bindCategoryEvents();
    
    // Observer để tự động bind khi có thay đổi
    const observer = new MutationObserver(() => {
        bindCategoryEvents();
    });
    observer.observe(scrollContainer, { childList: true, subtree: true });
    observer.observe(wrapContainer, { childList: true, subtree: true });
    
    // Export hàm ra global
    window.filterMenuByCategory = filterMenuByCategory;
    window.bindCategoryEvents = bindCategoryEvents;
    
    console.log('Categories initialized successfully');
}

// Khởi tạo khi DOM đã sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoriesWithToggle);
} else {
    initCategoriesWithToggle();
}