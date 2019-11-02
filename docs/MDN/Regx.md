# 正则表达式学习

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>单例模式弹框</title>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>

</head>
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background-color: #ffffff;
            font-family: -apple-system, PingFang SC, Hiragino Sans GB, Helvetica Neue, Arial;
            -webkit-tap-highlight-color: transparent;
        }
        .app {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 60px;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
        }
        .heading-2 {
            color: #333333;
        }
        .v-code {
            margin-top: 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            width: 280px;
            margin-left: auto;
            margin-right: auto;
        }
        .v-code input {
            position: absolute;
            top: 200%;
            opacity:1;
        }
        .v-code .line {
            position: relative;
            width: 40px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            font-size: 28px;
        }
        .v-code .line::after {
            display: block;
            position: absolute;
            content: '';
            left: 0;
            width: 100%;
            bottom: 0;
            height: 1px;
            background-color: #aaaaaa;
            transform: scaleY(.5);
            transform-origin: 0 100%;
        }
        .v-code .line.animated::before {
            display: block;
            position: absolute;
            left: 50%;
            top: 20%;
            width: 1px;
            height: 60%;
            content: '';
            background-color: #333333;
            animation-name: coruscate;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-fill-mode: both;
        }
        @keyframes coruscate {
            0% {
                opacity: 0
            }
            25% {
                opacity: 0
            }
            50% {
                opacity: 1
            }
            75% {
                opacity: 1
            }
            to {
                opacity: 0
            }
        }
    </style>
<body>
    <div id="root">
        <h2 class="heading-2">验证码:</h2>
        <div class="v-code">
            <input
                    ref="vcode"
                    id="vcode"
                    type="tel"
                    maxlength="6"
                    v-model="code"
                    @focus="focused = true"
                    @blur="focused = false"
                    :disabled="telDisabled">
    
            <label
                    for="vcode"
                    class="line"
                    v-for="item,index in codeLength"
                    :class="{'animated': focused && cursorIndex === index}"
                    v-text="codeArr[index]"
            >
            </label>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vue = new Vue({
        el: '#root',
        data: {
            code: '',
            codeLength: 6,
            telDisabled: false,
            focused: false
        },
        methods: {

        },
        computed: {
            codeArr() {
                return this.code.split('')
            },
            cursorIndex() {
                return this.code.length
            }
        },
        watch: {
            code(newVal) {
                this.code = newVal.replace(/[^\d]/g,'')
                if (newVal.length > 5) {
                    // this.telDisabled = true
                    this.$refs.vcode.blur()
                    setTimeout(() => {
                        alert(`vcode: ${this.code}`)
                    }, 500)
                }
            }
        },
    })
</script>
</html>
```
