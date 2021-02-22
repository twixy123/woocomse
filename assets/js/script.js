const minus = document.querySelector('.counter__minus'),
  plus = document.querySelector('.counter__plus'),
  counter = document.querySelector('.counter__count'),
  minus_1 = document.querySelector('.counter__minus_1'),
  plus_1 = document.querySelector('.counter__plus_1'),
  counter_1 = document.querySelector('.counter__count_1'),
  form = document.forms.add_to_card,
  form_1 = document.forms.add_to_card_1,
  select_block = document.querySelectorAll('.add_to_cart_block__select_block'),
  supports_rows = document.querySelectorAll('.support__row')

if (minus) {
  minus.addEventListener('click', function () {
    count(this, counter)
  })
  plus.addEventListener('click', function () {
    count(this, counter)
  })

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    send_req(this)
  })
}

if (minus_1) {
  minus_1.addEventListener('click', function () {
    count(this, counter_1)
  })
  plus_1.addEventListener('click', function () {
    count(this, counter_1)
  })

  form_1.addEventListener('submit', function (e) {
    e.preventDefault()
    send_req(this)
  })
}

if (select_block) {
  select_block.forEach(sb => {
    sb.querySelector('select').addEventListener('click', function () {
      sb.classList.toggle('active')
    })
  })
}

if (supports_rows) {
  supports_rows.forEach(s => {
    const title = s.querySelector('.support__title'),
      choise = s.querySelector('.support__choise'),
      cards = s.querySelectorAll('.support__card')

    title.addEventListener('click', function () {
      const choise_height = choise.clientHeight + 30
      this.classList.toggle('active')
      choise.classList.toggle('active')
      console.log(choise_height);
      if (this.classList.contains('active')) {
        s.style = `padding-bottom: ${choise_height}px`
      } else {
        s.style = `padding-bottom: 0`
      }
    })
    cards.forEach(c=>{
      c.addEventListener('click', function(){
        if(this.hasAttribute('data-choise')){
          this.removeAttribute('data-choise')
        }else{
          this.setAttribute('data-choise', 'true')
        }
      })
    })
  })
}

function count(btn, c) {
  let count = +c.innerHTML
  if (btn.innerHTML.trim() == '-') {
    if (count == 1) return
    count--
  } else {
    count++
  }
  c.innerHTML = count
}

function send_req(form) {

  form.counter.value = form.querySelector('.counter').innerHTML
  const res = {
    style: form.style.value,
    base_material: form.base_material.value,
    top_material: form.top_material.value,
    counter: form.counter.value,
  }

  console.log(res);
}