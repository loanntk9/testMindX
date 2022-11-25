// bai 1
function kiemTraSnt(n){
    console.log("n: " + n)
    let flag = true;
    if (n < 2){
        console.log("n: " + n)
        flag = false;
    } else {
        for (let i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    console.log("flag: " + flag)
    return flag;
}

// console.log(kiemTraSnt(8));

function TongSoNguyenTo(a, b){
    
    if ((isNaN(a) === false) || (isNaN(b) === false) & (a<b)){
        // alert("acn")
        let TongSnt = 0;
        // console.log("TongSnt: " + TongSnt);
        for (let i = a; i <= b; i++) {
            if (kiemTraSnt(i) === true) {
                TongSnt = TongSnt + i;
            }  
        }
        
        return TongSnt;
    } else {
        return("bạn phải nhập số a nho hơn số b");
    }
}

// console.log(TongSoNguyenTo(2,9));

let kq = document.getElementById("ket-qua");
let htkq = document.getElementById("hien-thi-kq");

kq.addEventListener("click",function(){
    let soA=document.getElementById("so-a");
    let soB=document.getElementById("so-b");
    // console.log(soA.value);

    let a = parseInt(soA.value);
    // console.log(a);

    let b = parseInt(soB.value);
    htkq.innerHTML = TongSoNguyenTo(a,b);
    }
);

//bai 2


function tamgiac(a) {
    let s="";
    for(let i=1; i<=a; i++){
        s += "*";
        let sao = document.getElementById("star");
        sao.innerHTML += s + "<br>";
        console.log(s);
    }
    
    return s;
  }


let kqs= document.getElementById("ket-qua-star");
console.log(kqs);
kqs.addEventListener("click",function(){
    let s = document.getElementById("so-sao");
    let d= s.value;
    tamgiac(d);
    // console.log(tamgiac(d));
    }
);
