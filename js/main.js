jQuery.ajax({
        url: 'https://randomuser.me/api/',
        beforeSend: function () {
            $('.username').html('<div class="load"></div>');
        },
        success: function(data) {
            var results = data['results']

            console.log(results['0']['login']['username']);
            $('.username').html(results['0']['login']['username'])
        }
    }
)
