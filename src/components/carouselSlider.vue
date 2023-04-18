<template>
   <div class="flex justify-evenly  bg-red-700 w-screen h-screen px-10 gap-8 ">
     <button class="text-2xl flex justify-center items-center" @click="back">-</button>
    <div class="bg-blue-700 w-screen">
       <p>{{ sliderContentList[indexSlider] }}</p>
    </div>
      <button class="text-2xl text-center" @click="forward">+</button>
   </div>
</template>

<script>
export default{

    data(){
        return{
            indexSlider:0,
            sliderContentList:["input1","input2","input3"]
        }
    }
    ,
    methods:{
        forward(){
            this.indexSlider++;
            if(this.indexSlider==this.sliderContentList.length){
             this.indexSlider=0;
            }
        },

        back(){
            this.indexSlider--;
            if(this.indexSlider<0){
                this.indexSlider=this.sliderContentList.length-1;
            }
        }





    }
    
    
}



</script>