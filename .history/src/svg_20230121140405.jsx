const Svg = ({name}) => {
    switch (name) {
        case '3d':
            return <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6875 20.8125C13.075 20.3525 12.1875 20.7875 12.1875 21.5625V22.42C11.42 22.3775 10.67 22.3212 9.95877 22.2425C3.86501 21.615 1.875 20.13 1.875 19.6875C1.875 19.5525 2.28626 18.9162 4.28501 18.2512C4.70001 18.155 5.00626 17.7825 5.00626 17.3375C5.00626 16.7212 4.35876 16.2562 3.77126 16.4462C1.26875 17.265 0 18.355 0 19.6875C0 22.77 6.83002 23.805 9.76002 24.1075C10.535 24.1925 11.3488 24.255 12.1875 24.3V25.3125C12.1875 26.0875 13.075 26.5212 13.6875 26.0625L16.1875 24.1875C16.685 23.8137 16.6875 23.0625 16.1875 22.6875L13.6875 20.8125Z" fill="#319F1C"/>
            <path d="M26.2225 16.4462C25.7275 16.285 25.2013 16.555 25.04 17.0475C24.88 17.54 25.1488 18.0687 25.6413 18.23C27.6688 18.89 28.125 19.52 28.125 19.6887C28.125 20.2425 25.5538 21.7862 19.19 22.3175C18.6738 22.3612 18.2913 22.8137 18.3338 23.33C18.375 23.8237 18.7975 24.2237 19.3463 24.1862C22.5488 23.9162 30 22.9425 30 19.6875C30 18.3537 28.7288 17.2625 26.2225 16.4462Z" fill="#319F1C"/>
            <path d="M14.9999 0L23.7499 3.75001L14.9999 7.50002L6.24988 3.75001L14.9999 0Z" fill="#319F1C"/>
            <path d="M16.2501 9.68373V16.9637L23.7501 13.75V6.46997L16.2501 9.68373Z" fill="#319F1C"/>
            <path d="M13.7499 9.68373L6.24988 6.46997V13.75L13.7499 16.9637V9.68373Z" fill="#319F1C"/>
            </svg>
            
            break;
    
        default:
            return <svg></svg>
    }
}