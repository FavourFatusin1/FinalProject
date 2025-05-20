/// Quote of the Day
const apiKey = "fZmCIKykW42pmYmbRR9rkg==E9Px6nAxmV3XgMt5";
const quoteBlock = document.getElementById('quoteBlock');

fetch('https://api.api-ninjas.com/v1/quotes', {
  method: 'GET',
  headers: { 'X-Api-Key': apiKey }
})
.then(response => {
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
})
.then(data => {
  if (data.length > 0) {
    const quote = data[0];
    quoteBlock.textContent = `"${quote.quote}" — ${quote.author}`;
  } else {
    quoteBlock.textContent = 'No quotes found.';
  }
})
.catch(error => {
  quoteBlock.textContent = 'Failed to load quote.';
  console.error('Error fetching quote:', error);
});
