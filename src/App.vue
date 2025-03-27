<template>
  <!-- 头部背景 -->
  <div class="backgroud"><h2>Web前端技术</h2></div>
  <!-- 导航菜单 -->
  <table>
      <tr><td @click="showPage = 'html'">HTML</td>
        <td @click="showPage ='css'">CSS</td>
        <td @click="showPage = 'javascript'">JavaScript</td>
        <td @click="showPage = 'ajax'">Ajax</td>
        <td @click="showPage ='xml'">XML</td>
        <td></td></tr>
  </table>
  <!-- 登录框 -->
  <div class="box">
    <div>
      <span>Username: </span><input type="text" placeholder="沈海建"></div>
    <div>
      Password: <input type="text" placeholder="2204060115"></div>
    <div>
      <span style="margin-right: 20px;">点击这里<a href="/zhuce">注册</a></span>
      <button>Login</button>
    </div>
  </div>
  <!-- 动态内容区域 -->
  <div class="content">
    <!-- HTML -->
    <div v-show="showPage === 'html'" class="page">
        <h2>我的位置>>HTML</h2>
        <hr>
        <p>HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签...</p>
    </div>
    <!-- CSS -->
    <div v-show="showPage === 'css'" class="page">
        <h2>我的位置>>CSS</h2>
        <hr>
        <p>CSS是层叠样式表，用于描述HTML文档的呈现方式...</p>
      </div>
    <!-- JavaScript -->
    <div v-show="showPage === 'javascript'" class="page">
      <h2>我的位置>>JavaScript</h2>
      <hr>
      <p>JavaScript是一种脚本语言，用于实现网页交互效果...</p>
    </div>
    <!-- Ajax -->
    <div v-show="showPage === 'ajax'" class="page">
      <h2>我的位置>>Ajax</h2>
      <hr>
      <p>Ajax 不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的Web应用程序的技术...</p>
    </div>
    <!-- XML -->
    <div v-show="showPage === 'xml'" class="page">
      <h2>我的位置>>XML</h2>
      <hr>
      <p>XML是一种独立于软件和硬件的工具，用于存储和传输数据...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showPage: 'html' 
    };
  }
}
</script>


<style>
body{
  margin: 0;
  cursor: pointer;
}
.backgroud{
  height: 180px;
  background-color: yellowgreen;
  padding:40px;
}
.box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float:right;
  width: 200px;
  height:160px;
  margin-top:10px;
  margin-right: 30px;
  padding: 10px;
  border: 1px solid black;
}
.box input{
  margin-left: 20px;
  width:40%;
}
.content{
  margin-left:20px;
  padding:5px;
}
table{
  width:100%;
}
td{
  background-color: green;
  padding:5px;
  text-align: center;
  width:17%;
}
a{
  text-decoration: none;
}
</style>
