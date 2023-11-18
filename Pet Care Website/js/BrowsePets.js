var imageIndex = 0;
var images = ["dog1.jpg","dog2.jpg","dog3.jpg","dog4.jpg","dog5.jpg","dog6.jpg","dog7.jpg","dog8.jpg","dog9.jpg"
			 ,"dog10.jpg","dog11.jpg","dog12.jpg","cat1.jpg","cat2.jpg","cat3.jpg","cat4.jpg","cat5.jpg","cat6.jpg"
			 ,"cat7.jpg","cat8.jpg","cat9.jpg","cat10.jpg","cat11.jpg","cat12.jpg","cat13.jpg"];
			
function BrowsePets(el) {
	imageIndex += el;
	if (imageIndex < 0) {
		imageIndex = 24
	}
	if (imageIndex > 24) {
		imageIndex = 0;
	}
				
	for (let i=0;i<images.length;i++) {
		if (i == imageIndex) {
			document.getElementById('image').src = "Images/" + images[i];
		}
	}
}	

/*	The images below are taken from websites

	Labrador Retriever
	Image: Dog1.jpg
	Source: marthastewart.com
	URL: https://www.marthastewart.com/8243168/american-kennel-club-labrador-retriever-most-popular-dog-breed-2022

    Golden Retriever
	Image: Dog2.jpg
	Source: hepper.com
	URL: https://www.hepper.com/golden-retriever/

	Chihuahua
    Image: Dog3.jpg
	Source: hepper.com
	URL: https://www.hepper.com/golden-retriever/
	
	Bulldog
    Image: Dog4.jpg
	Source: thesprucepets.com
	URL: https://www.thesprucepets.com/names-for-female-bulldogs-4843441 
	
	German Shepherd
	Image: Dog5.JPG
	Source: britannica.com
	URL: https://www.britannica.com/animal/German-shepherd 
	
	Husky
	Image: Dog6.JPG
	Source: britannica.com
	URL: https://www.britannica.com/animal/Siberian-husky 
	
	Poodle
	Image: Dog7.jpg
	Source: wikipedia.org
	URL: https://en.wikipedia.org/wiki/Poodle
	
	Yorkshire Terrier
	Image: Dog8.jpg
	Source: thesprucepets.com
	URL: https://www.thesprucepets.com/yorkshire-terrier-dog-preed-profile-1118010
	
	Pomeranian
	Image: Dog9.jpg
	Source: be.chewy.com
	URL: https://be.chewy.com/dog-breed/pomeranian/
	
	Shih Tzu
	Image: Dog10.jpg
	Source: nomnomnow.com
	URL: https://www.nomnomnow.com/learn/article/shih-tzu-skin-allergies
	
	Dalmatian
	Image: Dog11.jpg
	Source: pdsa.org.uk
	URL: https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/puppies-dogs/large-dogs/dalmatian
	
	Dobermann
	Image: Dog12.jpg
	Source: pets4homes.co.uk
	URL: https://www.pets4homes.co.uk/dog-breeds/dobermann/
	
	Siamese
	Image: Cat1.jpg
	Source: thehappycatsite.com
	URL: https://www.thehappycatsite.com/blue-point-siamese/
	
	British Shorthair
	Image: Cat2.jpg
	Source: thesprucepets.com
	URL: https://www.thesprucepets.com/british-shorthair-5219450
	
	Persian
	Image: Cat3.jpg
	Source: hepper.com
	URL: https://www.hepper.com/persian-cat/
	
	Sphynx
	Image: Cat4.jpg
	Source: trupanion.com
	URL: https://trupanion.com/breeds/cat/sphynx
	
	Scottish Fold
	Image: Cat5.jpg
	Source: petinsurance.com
	URL: https://www.petinsurance.com/healthzone/pet-breeds/cat-breeds/5-things-you-didnt-know-about-scottish-fold-cats/
	
	Birman
	Image: Cat6.jpg
	Source: vetstreet.com
	URL: https://www.vetstreet.com/cats/birman
	
	Russian Blue
	Image: Cat7.jpg
	Source: petplace.com
	URL: https://www.petplace.com/article/cats/pet-behavior-training/cat-behavior-training/all-about-the-russian-blue-personality/
	
	Ragdoll
	Image: Cat8.jpg
	Source: petkeen.com
	URL: https://petkeen.com/ragdoll-cat/
	
	Somali
	Image: Cat9.jpg
	Source: thesprucepets.com
	URL: https://www.thesprucepets.com/somali-cat-breed-profile-5191399
	
	Chartreux
	Image: Cat10.jpg
	Source: thelittlecarnivore.com
	URL: https://thelittlecarnivore.com/en/blog/what-are-the-differences-russian-blue-chartreux-cat
	
	Balinese
	Image: Cat11.jpg
	Source: cats.com
	URL: https://cats.com/cat-breeds/balinese
	
	Tonkinese
	Image: Cat12.jpg
	Source: vetsreet.com
	URL: https://www.vetstreet.com/cats/tonkinese
	
	Burmilla
	Image: Cat13.jpg
	Source: hepper.com
	URL: https://www.hepper.com/burmilla-cat/
*/