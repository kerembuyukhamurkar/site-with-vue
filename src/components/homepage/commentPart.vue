<template>
    
    <div class=" flex flex-col items-center justify-center bg-yellow-400 h-screen w-screen px-48 gap-40">
        <h1 class="text-6xl  ">Comments</h1>
        <div class="flex ">
            <commentCard  @mouseover="item.showAll=false" @mouseleave="item.showAll=true" v-for="item in comments" :key="item.key" :name="item.name" :commentContent="item.showAll?item.shortText:item.comment"/>
        </div>
        
    </div>
    
</template>

<script>

import commentCard from "./commentCard"

export default{
    data(){
        return{
            comments:[
                {
                    key:1,
                    name:"Eric",
                    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum tortor non dapibus rutrum. Phasellus feugiat libero scelerisque purus laoreet molestie. Cras viverra, magna lobortis posuere blandit, odio sem interdum risus, sed scelerisque elit dolor aliquam turpis. Quisque fermentum, ipsum vel accumsan tristique, massa lectus placerat tellus, quis posuere purus ante ac lorem. Morbi in risus ut turpis blandit sodales. Cras lacus odio, posuere in porta id, mollis sit amet tortor. Vestibulum vitae dignissim sapien, sit amet molestie erat. Nullam a nulla tellus. Fusce ut mollis diam. Etiam commodo ipsum dapibus libero varius posuere. Vestibulum et commodo sem, nec tincidunt.",
                    shortText:"",
                    showAll:false
                },
                {
                    key:2,
                    name:"Luke",
                    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit urna odio, at tristique urna pharetra sit amet. Duis tristique a nisi vel placerat. Mauris ex est, accumsan a felis quis, maximus egestas ante. Sed faucibus mi sit amet hendrerit faucibus. Morbi accumsan elementum lacus. Praesent ac quam eu lacus commodo commodo ac in velit. Sed malesuada tempor tellus mollis facilisis. In hac habitasse platea dictumst. Nunc convallis ante eget sem egestas finibus. Aliquam erat volutpat. Proin pretium ornare nibh, a luctus leo pulvinar egestas. Pellentesque eu maximus nunc. Maecenas auctor tempor est vitae ultricies. Integer vulputate, ipsum quis venenatis.",
                    shortText:"",
                    showAll:false
                },
                {
                    key:3,
                    name:"Kate",
                    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus tortor, sollicitudin et est a, suscipit rutrum dolor. Duis quis blandit ligula. Ut eleifend ut tortor nec laoreet. Cras tincidunt lectus risus, non accumsan mi lacinia id. Sed neque ipsum, tincidunt semper augue ac, ornare efficitur quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet egestas ex. Pellentesque porta molestie ante, sit amet volutpat eros sollicitudin sed. Etiam eget justo ipsum. Phasellus malesuada leo est, ac pulvinar nibh faucibus et. Phasellus cursus ex ac mauris posuere porttitor vel vitae lectus. Vivamus dictum eros.",
                    shortText:"",
                    showAll:false
                },  
            ]

        }
    },
    components:{
        commentCard

    },
    
    created(){
      
        for(let i=0;i<this.comments.length;i++){
         
         if(this.comments[i].comment.length>200){
            this.comments[i].shortText=this.comments[i].comment.slice(0,200);
            this.comments[i].shortText+="..."
            this.comments[i].showAll=true;
         }
        }
        
    }
}



</script>