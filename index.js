function addtocart(item) {
    var titel = document.getElementById(item.id + 'shoetittel').innerHTML;
    var name = document.getElementById(item.id + 'shoename').innerHTML
    var rate = document.getElementById(item.id + 'shoerate').innerHTML
    var dd = document.getElementById(item.id + 'shoedec').innerHTML
    var stlist = JSON.parse(localStorage.getItem('items'));
    var stor = {
        "titel": titel,
        "name": name,
        "rate": rate,
        "id": item.id,
        "count": 1,
        "des": dd
    }
    console.log(stlist);
    if (stlist == null || stlist.length == 0) {
        var stor1 = []
        stor1.push(stor)
        localStorage.setItem('items', JSON.stringify(stor1));
    } else {
        const tempIds = stlist.map(e => e.id)
        console.log(tempIds)
        if (tempIds.includes(item.id)) {
            const index = stlist.findIndex(e => e.id === item.id)
            stlist[index].count = stlist[index].count + 1;
            localStorage.setItem('items', JSON.stringify(stlist));
            subract()
        } else {
            stlist.push(stor)
            localStorage.setItem('items', JSON.stringify(stlist));
        }
    }
}
window.onload = function onLoadingFirst(index) {
    let taskl = JSON.parse(localStorage.getItem("items"));
    let answer = "";
    let x = document.getElementById("catshoe")
    taskl.forEach((stor, index) => {
        answer += `<h2 id="listn" class= "listsst">${stor.id}) ${stor.titel}</h2>`
        answer += `<h2 class="namestr">${stor.name}</h2>`
        answer += `<p class="des">${stor.des}</p>`
        answer += `<p class="ratestr" id="${index}+ratestrm">cost:- ₹${stor.rate} <span class="to" id="${index}+toa">Total:cost:- ₹${stor.rate*stor.count}</span></p>`
        answer += `<button class="countstr" id="${index}+countster">No.of.iterms:${stor.count}</button>`
    })
    x.innerHTML = answer
    let temp = taskl.map(stor => stor.count)
    console.log(temp)
    var tot = 0
    for (let i = 0; i < temp.length; i++) {
        tot += temp[i];
    }
    document.getElementById('idtotalitem').innerHTML = (tot + '&nbsp;items)');
    let tep = taskl.map(stor => stor.rate * stor.count)
    var tote = 0
    for (let i = 0; i < temp.length; i++) {
        tote += tep[i];
    }
    document.getElementById('idtotaamount').innerHTML = tote;
}

// function subract(index) {
//     var stlist = JSON.parse(localStorage.getItem('items'));
//     console.log(stlist)
//     let s = index
//     console.log(s)
//     let temp = stlist.map(stor => stor.count)
//     let int = temp.at(s)
//     let z = int - 1;
// <button onclick="subract(${index})">-</button> //
//     console.log(int = z)
// }