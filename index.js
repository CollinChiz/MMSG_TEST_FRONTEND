
    $("form").on("submit", function(e) {
        e.preventDefault();
        var currency = $(".currency").val().trim();
        var amount = $(".amount").val().trim();
        var targetCurrency = $(".target-currency").val().trim();
    
        console.log(currency, amount, targetCurrency);
        
        var queryURL = `https://mmsgtest.herokuapp.com/?currency=${currency}&base_amount=${amount}&target_currency=${targetCurrency}`;

        $.ajax({
            url: queryURL,
            method: "POST"
          })
          .then(function(res) {
              console.log(res.currency);

              var results = Math.round(res.amount * 100) / 100;
              console.log(results);

              $(".results").html(`<h2>${res.currency}</h2> <h3>${results}</h3>`)
              

          })
    })
