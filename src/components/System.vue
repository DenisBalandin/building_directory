<template>
 <div id="main_block">
    <div id="left_block">
      <div class="logo_left">
        BUILDING DIRECTORY
      </div>
       <div class="floor_block" :key="item.key" v-for="item in testCollection">
        <div class="floor_num">{{item.numfloor}}</div>
         <div class="company_name" >
          <p>{{item.data.name}}</p>
          <div>{{item.data.suite}}</div>
        </div>
      </div> 
    </div>
    <div id="right_block">
        <div class="right_logo">
            <img src="../assets/logo.jpg" width="20%"/>
        </div>
        <h1>
            Slide Title Content Goes Here.
        </h1>
        <div class="slideLogo">
            <div>LOGO</div>
            <div>LOGO</div>
            <div>LOGO</div>
            <div>LOGO</div>
        </div>
        <div class="clock">6:00<span>pm</span></div>
        <div class="down_text">
            <div>Some moderate Democrats feel frustrated as party leaders start writing articles of impeachment - CNN</div>
            <div>This Week in Brexit: These Two Scots May Be the Last Hope to Stop Brexit - Slate</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testCollection: [],
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    db
      .collection('building')
      .get()
      .then(snap => {
        const testCollection = [];
        const num = [];
        snap.forEach(doc => {
            if(doc.data().floor != num.length ){
                testCollection.push({ data: doc.data(), numfloor:'Floor '+doc.data().floor });
                num.push(1);
            }else{
                testCollection.push({ data: doc.data()});
            }
        });
        this.testCollection = testCollection;
      });
  },
};
</script>

<style>


</style>
