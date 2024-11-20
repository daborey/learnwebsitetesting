// Conversion Rates
const usdToRielRate = 4100; // 1 USD = 4100 Riel
const yuanToUsdRate = 0.14; // 1 Yuan = 0.14 USD (as an example)
const bahtToUsdRate = 0.028; // 1 Baht = 0.028 USD (as an example)

// Function to Convert USD to Khmer Riel
function convertUsdToRiel() {
    const usdValue = document.getElementById("usdInput").value;
    if (usdValue === '') {
        alert('Please enter a value to convert.');
        return;
    }
    const rielValue = usdValue * usdToRielRate;
    document.getElementById("usdToRielResult").innerText = `${usdValue} USD = ${rielValue} KHR (Riel)`;
}

// Function to Convert Yuan (Chinese) to USD
function convertYuanToUsd() {
    const yuanValue = document.getElementById("yuanInput").value;
    if (yuanValue === '') {
        alert('Please enter a value to convert.');
        return;
    }
    const usdValue = yuanValue * yuanToUsdRate;
    document.getElementById("yuanToUsdResult").innerText = `${yuanValue} CNY = ${usdValue} USD`;
}

// Function to Convert Baht (Thai) to USD
function convertBahtToUsd() {
    const bahtValue = document.getElementById("bahtInput").value;
    if (bahtValue === '') {
        alert('Please enter a value to convert.');
        return;
    }
    const usdValue = bahtValue * bahtToUsdRate;
    document.getElementById("bahtToUsdResult").innerText = `${bahtValue} THB = ${usdValue} USD`;
}
