
export const scheduledEvent = async (text) => {
    const reversedText = text.split('').reverse().join('');
    setTimeout(() => {
        console.log(`${reversedText}`);
    }, text.length * 1000);
}