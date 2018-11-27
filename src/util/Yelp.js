const apiKey = 'iVJVMxx_FsEZjcNKK7_UlV_GI4Uzpj1-jHbYdzdTyFpJZDRgwrEURuMYmqxYY0XZL1XFdfg_tMx-sO9gBQXqXgaxEk48KAAx5WsiYvoPlnxSJncJYvp5vojq9tJ7W3Yx';
const Yelp = {
     search: function(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                });
            }
        });
    },
    test: function(){
        console.log('redddddd');
    }
}

export default Yelp;