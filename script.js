$(document).ready(function () {
    // Initialize Swiper
        let mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 'vertical' for vertical slider
            loop: true, // Loop the slides
            navigation: {          
                nextEl: ".swiper-button-next",          
                prevEl: ".swiper-button-prev",        
            }
        });
        
        $("#myForm").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true,
                    },
                    phone: {
                        required: true,
                        pattern: /^\d{3}-\d{3}-\d{4}$/,
                    },
                    'credit-card': {
                        required: true,
                        pattern: /^\d{10}$/,
                    },
                    cvv: {
                        required: true,
                        pattern: /^\d{3}$/,
                    },
                },
                messages: {
                    name: "Please enter your name",
                    email: {
                        required: "Please enter your email",
                        email: "Please enter a valid email address",
                    },
                    phone: {
                        required: "Please enter a phone number",
                        pattern: "Please enter a valid US phone number (e.g., 123-456-7890)",
                    },
                    'credit-card': {
                        required: "Please enter a credit card number",
                        pattern: "Credit card number must be a 10-digit number",
                    },
                    cvv: {
                        required: "Please enter your CVV",
                        pattern: "CVV must be a 3-digit number",
                    },
                },
            });
        
});
