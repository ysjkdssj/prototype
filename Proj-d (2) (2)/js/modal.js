class modal {
    constructor() {
        this.modal = $('#modal')
        this.modal.css('display', 'none')
        this.addEvent()
    }

    addEvent() {
        this.basket = $('.basket_btn')
        this.basket.click((e)=> {
            this.modal.css('display', 'block')
            this.writeInfo(e)
        })

        $('#close').click(()=> {
            this.modal.css('display', 'none')
            $('.modal-container > h2').html('')
        })
    }

    writeInfo(e) {
        // console.log(e.target.dataset.name);
        this.name = e.target.dataset.name;
        console.log(this.name);
        $('.modal-container > h2').html(this.name)
    }





}