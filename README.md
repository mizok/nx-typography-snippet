# nx-typography README

NEUX UI SCSS SYSTEM TYPOGRAPHY MIXIN GENERATOR.

# 安裝方法

![image](https://i.imgur.com/YqlMRly.png)

請在VSCODE 編輯器上找到extension頁籤, 點擊右上方的...開啟選項, 然後選取 install from VSIX, 選擇透過本repo 產生的nx-typography-snippet-<版本號>.vsix 檔案以手動安裝插件

![image](https://i.imgur.com/SvgX3BZ.png)
# 這個插件是用來幹嘛用的?

因為平常在使用nx-ui或nx-ui-jquery切版時, zeplin會自動把字級名稱內的斜線和空白自動換成“-” , 這樣一來不太方便直接透過複製zeplin上面的字級名稱來找到對應的mixin, 所以這邊簡單做了一個snippet插件。安裝這個插件之後可以直接導入整個nx-ui/nx-ui-jquery 的 typography mixin snippet, 希望這樣多少可以減少不便的狀況。
# npm 指令說明: 

- build : 產生.code-snippets文檔
- package : 產生.vsix 插件手動安裝檔

執行上述兩個指令前, 請先確認全域環境底下有安裝:

- node.js
- vsce(npm包)

