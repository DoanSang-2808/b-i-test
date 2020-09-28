const Main = {
    Start : function(){
        let btn = document.querySelector('.btn');
        if(btn){
            btn.addEventListener('click', this.Play);
        }
    },
    Play : function(){
       let result = UI.getNumber();
        console.log(result);
        UI.checkNumber(result);
        if(count == 3){
            alert("bạn đã hết lượt!!!! Ván mới bắt đầu ");
            document.querySelector('.input').value =""
            UI.resetGame();
        }
    //    console.log(Logic.randomLucky())
    }
};

const UI = {
    getNumber : function(){
        let result = document.querySelector('.input').value;
        return Number(result);
    },
    checkNumber : function(number){
        if( number > 10){
            alert("số bạn dự đoán ngoài khoảng quay số. Bạn vui lòng nhập lại");
            document.querySelector('.input').value =""
        } else {
            if(Logic.randomLucky() == number){
                count += 1;
                n_1 += 1;
                let n = 3 -count;
                alert("bạn đã đoán đúng " + n_1 + " lần, số lượt chơi còn lại là " + n)
                document.querySelector('.input').value =""
            }else if(Logic.randomLucky() != number){
                count += 1;
                n_0 += 1;
                let n = 3- count;
                alert("bạn đã đoán sai " + n_0 + " lần,số quay được là: " +  Logic.randomLucky()+ " số lượt chơi còn lại là " + n )
                document.querySelector('.input').value =""
            }
            if(n_0 + n_1 ==3){
                if(n_1 == 3){
                    alert("bạn đã đoán đúng cả 3 lần, bạn đã trúng thưởng")
                    document.querySelector('.input').value =""
                }else {
                    alert(" bạn đã đoán sai cả 3 lần, bạn đã không trúng thưởng")
                    document.querySelector('.input').value =""
                }
            }

        }
        
    },
    resetGame : function(){
        count = 0;
        n_0  = 0;
        n_1 = 0;
    }




        //  else if ( Logic.randomLucky() == Number(number) && count < 3){
        //     alert('bạn đã trúng thưởng');
        // } else if (Logic.randomLucky() != Number(number)){
        //     count += 1;
        //     if(count < 3){
        //         let n = 3 - count
        //         alert('bạn đã đoán sai. Bạn còn " + n + " lần đoán lại. Số quay trúng là: ' + Logic.randomLucky() );
        //     } else {
        //         alert('bạn đã hết lượt đoán');
        //     }
        // }
        // return true;
    


};
const Logic = {
    randomLucky : function(){
        return ran = Number(Math.floor(Math.random()*(10)));
    }
}
Main.Start();
let count = 0;
let n_1 = 0;
let n_0 = 0;
