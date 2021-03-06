class Business {
   constructor(business) {
      this.id = business.id;
      this.name = business.name;
      this.phone = business.phone;
      this.website = business.website;
      this.instagram = business.instagram;
      this.neighborhood_id = business.neighborhood.id;
      Business.all.push(this);
   }

   renderBusiness() { 
      if (this.website == "N/A") {
         return `<li class="text-justify my-4" data-business-id=${this.id} style="width: 300px">
         <span style="font-weight: 600">${this.name}</span><br>
         Ph: ${this.phone}<br>
         IG: ${this.instagram}</li>`
      } else {
         return `<li class="text-justify my-4" data-business-id=${this.id} style="width: 300px">
         <span style="font-weight: 600">${this.name}</span><br>
         Ph: ${this.phone}<br>
         IG: ${this.instagram}<br>         
         <a href="${this.website}" target="_blank">>> Go to website</a></li>`
      }      
   }

   addBusinessToNeighborhood() {
      const ul = document.querySelector(`[data-neighborhood-businesses="${this.neighborhood_id}"]`);
      ul.innerHTML += this.renderBusiness();
   }

   static sortBusinesses() {
      // let items = document.querySelectorAll("li");
      // items.forEach(item => item.remove());
    
      const businesses = Business.all;
      const copyBusinesses = [...businesses]; 
    
      const sortedBusinesses = copyBusinesses.sort((a, b) => (a.name > b.name) ? 1 : -1)
      // debugger

      let items = document.querySelectorAll("li");
      items.forEach(item => item.remove());
    
      sortedBusinesses.forEach(business => business.addBusinessToNeighborhood())

      console.log("Businesses are sorted!")
   }
}

Business.all = [];