$.ajax({
  url: 'https://api.airtable.com/v0/appZeSmEtA7kRe5zg/Products',
  headers: {
    Authorization: 'Bearer key23F8r22FJ7DNvk'
  },
  success: function(response) {
    console.log(response.records)
    response.records.forEach(product => {
      const name = product.fields.Name
      const desc = product.fields.Description
      const price = product.fields.Price

      console.log(product.fields.Photo)

      let img_url
      if (product.fields.Photo) {
        img_url = product.fields.Photo[0].url
      } else {
        img_url = 'data:image/png;base64,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'
      }

      $('#product-wrapper').append(`
        <div class="col-md-6 col-lg-4">
          <div class="card mb-4">
            <img height="200" src="${img_url}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${desc}</p>
              <a href="#" class="btn btn-outline-info">RM${price}</a>
            </div>
          </div>
        </div>
      `)
    })
  }
})