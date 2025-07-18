const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    /* HERO BANNER ON TOP */
    .hero-banner {
        text-decoration: none;
        position: relative;
        width: 100%;
        height: 400px;
        background-image: url('https://i.imgur.com/RB3z5RD.jpeg');
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .hero-banner a {
        text-decoration: none;
    }

    .hero-banner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }

    .hero-banner-text {
        position: relative;
        color: white;
        font-size: 3em;
        font-weight: bold;
        text-align: center;
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
        padding: 0 20px;
        max-width: 90%;
        z-index: 2;
    }

    header {
        background-color: white;
        padding: 10px 20px;
        border-bottom: 2px solid #d71e28;
    }

    .preview {
        width: 100%;
        max-width: 300px;
        height: auto;
        cursor: pointer;
    }

    .icon {
        cursor: pointer;
        width: 100%;
        max-width: 60px;
        height: auto;
    }

    @media (max-width: 970px) {
        header nav ul {
            display: none;
        }
    }

    nav {
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav img {
        height: 50px;
    }

    nav ul {
        list-style: none;
        display: flex;
        gap: 20px;
        padding: 0;
        margin: 0;
    }

    nav ul li a {
        color: #333333;
        text-decoration: none;
        font-weight: bold;
    }

    nav ul li a:hover {
        color: #d71e28;
        text-decoration: none;
        font-weight: bold;
    }

    nav ul li {
        display: inline;
    }

    .order-button:hover {
        background-color: #ec3c3c;
        color: #fff;
        transition: background-color 0.4s ease;
    }

    .order-container {
        width: auto;
        object-fit: contain;
    }

    .order-button {
        display: inline-block;
        margin: 10px;
        text-decoration: none;
        border: #d71e28;
        background: #d71e28;
        padding: 15px 20px;
        color: #ffffff;
        font-weight: 850;
    }
    .story {
        display: flex;
        background-color: #d71e28;
        color: white;
        padding: 40px 20px;
        align-items: center;
        flex-wrap: wrap;
    }

    .story-text {
        flex: 1;
        padding: 20px;
    }

    .story img {
        flex: 1;
        max-width: 100%;
        height: auto;
        padding: 20px;
    }

    .story button {
        background-color: white;
        color: #d71e28;
        padding: 10px 20px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        margin-top: 20px;
    }

    .menu-section {
        padding: 40px 20px;
        text-align: center;
    }

    .menu-section h2 {
        font-size: 32px;
        color: black;
    }

    .menu-section h2 span {
        color: #d71e28;
    }

    .menu-section p {
        margin-top: 10px;
        font-size: 18px;
        color: #333;
    }

    .menu-items {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .menu-items img {
        width: 300px;
        border-radius: 10px;
    }
`;
document.head.appendChild(style);
