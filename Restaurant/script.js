/* ================= FOOD DATA ================= */
const foodItems = [
    { name: "Veg Spring Rolls", price: 120, category: "starters", rating: 4.2, type: "veg", tag: "Popular", prepTime: "20 mins", img: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg" },
    { name: "Chicken Tikka", price: 180, category: "starters", rating: 4.5, type: "nonveg", tag: "Best Seller", prepTime: "25 mins", img: "https://sinfullyspicy.com/wp-content/uploads/2014/03/1200-by-1200-images-2.jpg" },
    { name: "Paneer Tikka", price: 160, category: "starters", rating: 4.3, type: "veg", tag: "Customer Favorite", prepTime: "22 mins", img: "https://orders.popskitchen.in/storage/2024/09/image-358.png" },
    { name: "Chicken Biryani", price: 220, category: "biryanis", rating: 4.7, type: "nonveg", tag: "Top Rated", prepTime: "30 mins", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s" },
    { name: "Mutton Biryani", price: 280, category: "biryanis", rating: 4.6, type: "nonveg", tag: "Chef Special", prepTime: "35 mins", img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg" },
    { name: "Veg Biryani", price: 180, category: "biryanis", rating: 4.1, type: "veg", tag: "Healthy Choice", prepTime: "28 mins", img: "https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg" },
    { name: "Butter Chicken", price: 240, category: "curries", rating: 4.8, type: "nonveg", tag: "Best Seller", prepTime: "30 mins", img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg" },
    { name: "Paneer Butter Masala", price: 200, category: "curries", rating: 4.4, type: "veg", tag: "Popular", prepTime: "25 mins", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JfZHtD_jlggLqhDlthd7Jg2o4gt7OrWH7w&s" },
    { name: "Dal Tadka", price: 140, category: "curries", rating: 4.0, type: "veg", tag: "Homestyle", prepTime: "20 mins", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kLMn_YJz4DEPNat_gUTF_QWOxqKiIRWMQw&s" },
    { name: "Gulab Jamun", price: 80, category: "desserts", rating: 4.6, type: "veg", tag: "Sweet Tooth Favorite", prepTime: "15 mins", img: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800" },
    { name: "Ice Cream", price: 110, category: "desserts", rating: 4.3, type: "veg", tag: "Chilled Delight", prepTime: "10 mins", img: "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg" },
    { name: "Chocolate Cake", price: 130, category: "desserts", rating: 4.7, type: "veg", tag: "Best Seller", prepTime: "18 mins", img: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg" },
    { name: "Lime Soda", price: 60, category: "drinks", rating: 4.1, type: "veg", tag: "Refreshing", prepTime: "8 mins", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesNNLtgLZJxbgUpaWmxEiuYTRLpsQkD8rUg&s" },
    { name: "Cold Coffee", price: 120, category: "drinks", rating: 4.5, type: "veg", tag: "Popular", prepTime: "12 mins", img: "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg" },
    { name: "Mango Juice", price: 90, category: "drinks", rating: 4.2, type: "veg", tag: "Seasonal Special", prepTime: "10 mins", img: "https://vaya.in/recipes/wp-content/uploads/2018/02/mango-frooti.jpg" }
];

let appliedDiscount = 0;
let couponApplied = false;

/* ================= DISPLAY FOOD ================= */
function displayFood(items) {
    const container = document.getElementById("foodContainer");
    container.innerHTML = "";
    const categories = ["starters", "biryanis", "curries", "desserts", "drinks"];

    categories.forEach(cat => {
        const catItems = items.filter(item => item.category === cat);
        if (!catItems.length) return;

        const section = document.createElement("div");
        section.classList.add("category-section");

        const heading = document.createElement("h2");
        heading.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        section.appendChild(heading);

        const grid = document.createElement("div");
        grid.classList.add("menu-grid");

        catItems.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <span class="badge ${item.type}">${item.type === "veg" ? "VEG" : "NON-VEG"}</span>
                <span class="badge tag">${item.tag}</span>
                <img src="${item.img}">
                <h3>${item.name}</h3>
                <p class="rating">⭐ ${item.rating} • ⏱ ${item.prepTime}</p>
                <p class="price">₹${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

/* ================= FILTERS ================= */
function applyFilters() {
    let selectedCategory = document.getElementById("categoryFilter").value;
    let sortType = document.getElementById("priceSort").value;

    let filtered = [...foodItems];
    if (selectedCategory !== "all") filtered = filtered.filter(i => i.category === selectedCategory);
    if (sortType === "low") filtered.sort((a, b) => a.price - b.price);
    if (sortType === "high") filtered.sort((a, b) => b.price - a.price);

    displayFood(filtered);
}

document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("priceSort").addEventListener("change", applyFilters);

function showMenu() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    displayFood(foodItems);
}

/* ================= CAROUSEL ================= */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 3000);

/* ================= CART ================= */
let cart = [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) existing.quantity++;
    else cart.push({ name, price, quantity: 1 });

    updateCartUI();
    showToast("Item added to cart!");
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalAmountSpan = document.getElementById("totalAmount");
    const cartCount = document.getElementById("cartCount");

    cartItemsContainer.innerHTML = "";

    let totalAmount = 0;
    let totalItems = 0;

    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
        totalItems += item.quantity;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
        <div class="item-info">
            <span>${item.name}</span>
            <div class="qty-controls">
                <button onclick="changeQty('${item.name}', -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="changeQty('${item.name}', 1)">+</button>
            </div>
        </div>
        <div class="item-price">₹${item.price * item.quantity}</div>
        `;
        cartItemsContainer.appendChild(div);
    });

    // Update cart badge
    cartCount.textContent = totalItems;

    // Store subtotal globally
    currentSubtotal = totalAmount;

    // ❗ RESET COUPON FIRST IF SUBTOTAL DROPS
    if (currentSubtotal < 499) {
        appliedDiscount = 0;
        couponApplied = false;
    }

    const deliveryFee = totalAmount > 499 ? 0 : 40;
    const gst = Math.round((totalAmount - appliedDiscount) * 0.05);
    const grandTotal = totalAmount - appliedDiscount + gst + deliveryFee;

    const summary = document.createElement("div");
    summary.classList.add("bill-summary");
    summary.innerHTML = `
        <p><span>Subtotal</span><span>₹${totalAmount}</span></p>
        ${appliedDiscount > 0 ? `<p style="color:green;"><span>Discount (20%)</span><span>-₹${appliedDiscount}</span></p>` : ""}
        <p><span>GST (5%)</span><span>₹${gst}</span></p>
        <p><span>Delivery Fee</span><span>₹${deliveryFee}</span></p>
        <h3><span>Total</span><span>₹${grandTotal}</span></h3>
    `;
    cartItemsContainer.appendChild(summary);

    totalAmountSpan.textContent = grandTotal;
}

function changeQty(name, change) {
    const item = cart.find(i => i.name === name);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.name !== name);
    updateCartUI();
}

function toggleCart() {
    document.getElementById("cartPanel").classList.toggle("open");
}

function placeOrder() {
    if (!cart.length) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");

    cart = [];
    updateCartUI();

    appliedDiscount = 0;
    couponApplied = false;
    currentSubtotal = 0;

    const couponInput = document.getElementById("couponInput");
    const couponMsg = document.getElementById("couponMsg");

    if (couponInput) couponInput.value = "";
    if (couponMsg) couponMsg.textContent = "";

    toggleCart();
}


/* ================= SEARCH ================= */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const text = this.value.toLowerCase();
        displayFood(foodItems.filter(item => item.name.toLowerCase().includes(text)));
    });
}

/* ================= TOAST ================= */
function showToast(msg) {
    const toast = document.createElement("div");
    toast.textContent = msg;
    toast.style.position = "fixed";
    toast.style.bottom = "80px";
    toast.style.right = "20px";
    toast.style.background = "#28a745";
    toast.style.color = "white";
    toast.style.padding = "10px 15px";
    toast.style.borderRadius = "6px";
    toast.style.zIndex = "2000";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
}

function applyCoupon() {
    const code = document.getElementById("couponInput").value.trim().toUpperCase();
    const msg = document.getElementById("couponMsg");

    if (couponApplied) {
        msg.textContent = "Coupon already applied!";
        msg.style.color = "orange";
        return;
    }

    if (code === "FOODIE20" && currentSubtotal >= 499) {
        appliedDiscount = Math.round(currentSubtotal * 0.20);
        couponApplied = true;
        msg.textContent = "Coupon applied! 20% discount added 🎉";
        msg.style.color = "green";
    } else if (currentSubtotal < 499) {
        msg.textContent = "Order must be above ₹499 to use this coupon.";
        msg.style.color = "red";
    } else {
        msg.textContent = "Invalid coupon code.";
        msg.style.color = "red";
    }

    updateCartUI();
}

