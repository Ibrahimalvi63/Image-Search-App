const accessKey = 'vGjw-fLzu1HZ5_LuQcCi1tVkzSpc5H5zDBNrDBWCaGw';



const input = document.querySelector('#search-input');



const searchBtn= document.querySelector('#search-btn');
const boxContainer = document.querySelector('.container');

const showMoreBtn = document.querySelector('#show_more');


let page = 1;









async function searchImage(userInput) {
   
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${userInput}&client_id=${accessKey}`;
  
 if (page===1) {
    boxContainer.innerHTML = '';
    
  }
  
  
  const response = await fetch(url);
  const imageData = await response.json();
  const images = imageData.results;
  
  
  
  
  images.map((image)=>{
    const imageContent = document.createElement('div');
    imageContent.classList.add('image_con');
    const imgTag = document.createElement('img');
    imgTag.src = image.urls.regular;
    imgTag.alt = image.alt_description;
    
    const ancTag = document.createElement('a');
    ancTag.href = image.links.html;
    ancTag.target = '_blank';
    
    ancTag.textContent = image.alt_description;
    
    console.log(image)
    
    imageContent.appendChild(imgTag);
    imageContent.appendChild(ancTag);
    boxContainer.appendChild(imageContent);
    
    
    
  });

  
  
  
  
    
  
 page++;
 console.log(page);
  if (page > 1) {
      showMoreBtn.style.display = 'block'
    }
 
 
}


searchBtn.addEventListener('click', ()=>{
  page = 1;
  const userInput = input.value;
  searchImage(userInput);
  
})

showMoreBtn.addEventListener('click', ()=>{
  
  searchImage();
})

