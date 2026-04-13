// banner-ads.js
(function() {
    // 1. بيانات الإعلان (غيرها من هنا وتتحدث عند الكل)
    const adData = {
        link: "https://arabpro.lat", // الرابط اللي يفتح عند الضغط
        image: "https://your-domain.com/banner-image.png", // رابط صورة البنر (يفضل مقاس 728x90)
        altText: "ArabPro Discord Bot"
    };

    // 2. تصميم البنر (CSS)
    const style = `
        .ap-banner-container {
            width: 100%;
            max-width: 728px;
            margin: 10px auto;
            overflow: hidden;
            border-radius: 12px;
            border: 1px solid rgba(59, 130, 246, 0.3);
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
            background: #0d1220;
        }
        .ap-banner-container:hover {
            transform: scale(1.02);
            border-color: #3b82f6;
        }
        .ap-banner-link {
            display: block;
            line-height: 0;
        }
        .ap-banner-img {
            width: 100%;
            height: auto;
            display: block;
        }
    `;

    // 3. حقن الستايل في الصفحة
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    // 4. إنشاء هيكل البنر
    const bannerHTML = `
        <div class="ap-banner-container">
            <a href="${adData.link}" target="_blank" class="ap-banner-link">
                <img src="${adData.image}" alt="${adData.altText}" class="ap-banner-img">
            </a>
        </div>
    `;

    // 5. وضع البنر في مكان الكود
    const currentScript = document.currentScript;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = bannerHTML;
    currentScript.parentNode.insertBefore(wrapper, currentScript.nextSibling);
})();
