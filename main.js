const Main = {
    Start : function(){
        let btn = document.querySelector('.btn');
        if(btn){
            btn.addEventListener('click', this.Croll);
        }
    },
    Croll : function(){
       let result = UI.getNumber();
    //    console.log(result);
       UI.checkNumber(result);
    //    console.log(Logic.randomLucky())
    }
};

const UI = {
    getNumber : function(){
        let result = document.querySelector('.input').value;
        return result;
    },
    checkNumber : function(number){
        count = 0;
        if(Number(number) <0 && Number(number) > 10){
            alert('số bạn dự đoán ngoài khoảng quay số');
            alert('bạn vui lòng nhập lại');
        } else if ( Logic.randomLucky() == Number(number)){
            alert('bạn đã trúng thưởng');
        } else if (Logic.randomLucky() == Number(number)){
            count += 1;
            if(count < 3){
                let n = 3 - count
                alert('bạn đã đoán sai. Bạn còn " + n + " lần đoán lại. Số quay trúng là: ' + Logic.randomLucky() );
            } else {
                alert('bạn đã hết lượt đoán');
            }
        }
        return true;
    }

};
const Logic = {
    randomLucky : function(){
        return ran = Number(Math.floor(Math.random()*(10)));
    }

}
Main.Start();