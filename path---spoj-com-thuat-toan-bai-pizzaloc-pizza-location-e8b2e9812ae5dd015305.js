webpackJsonp([0xfc2ff3fa8a88],{822:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Picko muốn mở một số cửa hàng pizza tại 1 số địa điểm. Bánh pizza sẽ cung cấp cho mọi khách hàng nằm trong hình tròn bán kính R với tâm là các địa điểm được chọn. </p>\n<p>Xác định số khách hàng lớn nhất có thể phục vụ.</p>\n<h3>Input</h3>\n<p>Dòng đầu là hai số K, R : số nhà hàng có thể được mở và bán kính phục vụ của mỗi nhà hàng,1 ≤ K ≤ 10, 1 ≤ R ≤ 500. </p>\n<p>Dòng thứ hai là M, số địa điểm có thể đặt nhà hàng, K ≤ M ≤ 20. </p>\n<p>M dòng tiếp theo, mỗi dòng là 2 số nguyên X và Y, -1000 ≤ X,Y ≤ 1000. </p>\n<p>Dòng tiếp theo là N, số khu nhà, 1 ≤ N ≤ 100. </p>\n<p>Mỗi dòng trong N dòng tiếp theo là 3 số nguyên X, Y , S, là tọa độ và số người ở khu nhà đó, -1000 ≤ X,Y ≤ 1000, 1 ≤ S ≤ 100. </p>\n<p>Khu nhà nằm trong bán kính của nhà hàng nếu khoảng cách giữa chúng &#x3C;= R. Không có 2 khu nhà tại cùng 1 địa điểm.</p>\n<h3>Output</h3>\n<p>Ghi ra số người tối đa có thể được phục vụ.</p>\n<h3>Ví dụ:</h3>\n<p><strong>pizza.in</strong> </p>\n<p>2 2 </p>\n<p>3</p>\n<p>1 0</p>\n<p>4 0 </p>\n<p>7 0 </p>\n<p>4 </p>\n<p>0 0 1</p>\n<p>3 0 7</p>\n<p>5 0 9 </p>\n<p>8 0 1 </p>\n<p><strong>pizza.out</strong> </p>\n<p>18 </p>\n<p><strong>pizza.in</strong> </p>\n<p>2 2 </p>\n<p>3 </p>\n<p>-2 0 </p>\n<p>0 1 </p>\n<p>3 0 </p>\n<p>8 </p>\n<p>-3 1 1 </p>\n<p>-3 0 1 </p>\n<p>-3 -1 1 </p>\n<p>-2 -1 1 </p>\n<p>0 0 3 </p>\n<p>0 2 1 </p>\n<p>2 1 3 </p>\n<p>4 0 2 </p>\n<p><strong>pizza.out</strong> </p>\n<p>12 </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/PIZZALOC/vn/">http://www.spoj.com/problems/PIZZALOC/vn/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Trong bài toán này, ta sẽ phải xây K nhà hàng trong M vị trí. Ở đây, thực chất là ta sẽ phải liệt kê ra tổ hợp chập K của M phần tử trường hợp. </p>\n</li>\n<li>\n<p>Với mỗi trường hợp, ta sẽ kiểm tra xem mỗi ngôi nhà có được phục vụ bởi nhà hàng nào hay không. </p>\n</li>\n<li>\n<p>Tôi sẽ triển khai bài toán sử dụng <a href="/the-algorithms-blog/category/quay-lui-co-dieu-kien-backtracking/">thuật toán quay lui có điều kiện - Backtracking</a>. </p>\n</li>\n<li>\n<p>Một điều chú ý là: với mỗi vị trí có thể đặt nhà hàng, tôi sẽ kiểm tra xem tại vị trí đó, nếu như tôi đặt nhà hàng thì nó sẽ phục vụ được cho những ngôi nhà nào. Kết quả tôi sẽ lưu được vào một mảng. Điều này sẽ tránh bị time limit.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91917396" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-pizzaloc-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-pizzaloc-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-pizzaloc-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-pizzaloc-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-pizzaloc-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-pizzaloc-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX_PLACE = <span class="pl-c1">21</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-pizzaloc-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX_HOUSE = <span class="pl-c1">101</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-pizzaloc-cpp-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-pizzaloc-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> NumRest, R;                             <span class="pl-c"><span class="pl-c">//</span> Số lượng nhà hàng và bán kính</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-pizzaloc-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> NumPlac;                                <span class="pl-c"><span class="pl-c">//</span> Số địa điểm có thể đặt nhà hàng</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-pizzaloc-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> XPlace[MAX_PLACE], YPlace[MAX_PLACE];   <span class="pl-c"><span class="pl-c">//</span> Toạ độ các điểm có thể đặt nhà hàng</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-pizzaloc-cpp-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-pizzaloc-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> NumHous;                                <span class="pl-c"><span class="pl-c">//</span> Số khu nhà</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-pizzaloc-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> XHouse[MAX_HOUSE], YHouse[MAX_HOUSE];   <span class="pl-c"><span class="pl-c">//</span> Toạ độ các khu nhà</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-pizzaloc-cpp-LC13" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-pizzaloc-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> NumPeop[MAX_HOUSE];                     <span class="pl-c"><span class="pl-c">//</span> Số người ở mỗi khu nhà</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-pizzaloc-cpp-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> MaxPeop;                                <span class="pl-c"><span class="pl-c">//</span> Số người tối đa có thể phục vụ</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-pizzaloc-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> SumPeop;                                <span class="pl-c"><span class="pl-c">//</span> Tổng số người</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-pizzaloc-cpp-LC17" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-pizzaloc-cpp-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> PRest[MAX_PLACE];                       <span class="pl-c"><span class="pl-c">//</span> Lưu lại vị trí đã đặt của các nhà hàng</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-pizzaloc-cpp-LC19" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-pizzaloc-cpp-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Reach[MAX_PLACE][MAX_HOUSE];    <span class="pl-c"><span class="pl-c">//</span> Kiểm tra xem một vị trí có thể phục vụ những ngôi nhà nào</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-pizzaloc-cpp-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Count[MAX_PLACE];               <span class="pl-c"><span class="pl-c">//</span> Đếm số nhà mà nhà hàng có thể phục vụ ứng với mỗi vị trí</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-pizzaloc-cpp-LC22" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-pizzaloc-cpp-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-pizzaloc-cpp-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @PARAM: pos : lưu vị trí đang xét</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-pizzaloc-cpp-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @PARAM: numIgnore : số vị trí ko đặt</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-pizzaloc-cpp-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @PARAM: numRestor : số nhà hàng đã đặt</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-pizzaloc-cpp-LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-pizzaloc-cpp-LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Check</span>(<span class="pl-k">int</span> pos, <span class="pl-k">int</span> numIgnore, <span class="pl-k">int</span> numRestor)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-pizzaloc-cpp-LC29" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-pizzaloc-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(pos == NumPlac)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-pizzaloc-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-pizzaloc-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Kiểm tra với những cách đã đặt cách nào phục vụ nhiều người nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-pizzaloc-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Duyệt lần lượt các ngôi nhà, xem với mỗi ngôi nhà nó có được phục vụ không</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-pizzaloc-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-pizzaloc-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Những người được phục vụ</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-pizzaloc-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> SerPeop = <span class="pl-c1">0</span>;\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-pizzaloc-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> Mark[MAX_HOUSE] = {<span class="pl-c1">0</span>};</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-pizzaloc-cpp-LC38" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-pizzaloc-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; NumRest; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-pizzaloc-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-pizzaloc-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> idRest = PRest[j];</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-pizzaloc-cpp-LC42" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-pizzaloc-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; Count[idRest]; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-pizzaloc-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-pizzaloc-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Chú ý: mỗi ngôi nhà chỉ được tính một lần.</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-pizzaloc-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">int</span> idHouse = Reach[idRest][i];</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-pizzaloc-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(Mark[idHouse] == <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-pizzaloc-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-pizzaloc-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tSerPeop += NumPeop[idHouse];</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-pizzaloc-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tMark[idHouse] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-pizzaloc-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-pizzaloc-cpp-LC52" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-pizzaloc-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu đã phục vụ được tối đa rồi thì thoát luôn</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-pizzaloc-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(SerPeop == SumPeop) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-pizzaloc-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-pizzaloc-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-pizzaloc-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-pizzaloc-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(SerPeop &gt; MaxPeop) MaxPeop = SerPeop;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-pizzaloc-cpp-LC59" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-pizzaloc-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-pizzaloc-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-pizzaloc-cpp-LC62" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-pizzaloc-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(MaxPeop == SumPeop) <span class="pl-k">return</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-pizzaloc-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-pizzaloc-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Đặt nhà hàng</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-pizzaloc-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(numRestor &lt; NumRest)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-pizzaloc-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-pizzaloc-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\tPRest[numRestor] = pos;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-pizzaloc-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">Check</span>(pos + <span class="pl-c1">1</span>, numIgnore, numRestor + <span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-pizzaloc-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(MaxPeop == SumPeop) <span class="pl-k">return</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-pizzaloc-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-pizzaloc-cpp-LC72" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-pizzaloc-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Ko đặt nhà hàng</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-pizzaloc-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(numIgnore &lt; NumPlac - NumRest)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-pizzaloc-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">Check</span>(pos + <span class="pl-c1">1</span>, numIgnore + <span class="pl-c1">1</span>, numRestor);</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-pizzaloc-cpp-LC76" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-pizzaloc-cpp-LC77" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-pizzaloc-cpp-LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-pizzaloc-cpp-LC79" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-pizzaloc-cpp-LC80" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-pizzaloc-cpp-LC81" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-pizzaloc-cpp-LC82" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-pizzaloc-cpp-LC83" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; NumRest &gt;&gt; R &gt;&gt; NumPlac;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-pizzaloc-cpp-LC84" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; NumPlac; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-pizzaloc-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; XPlace[i] &gt;&gt; YPlace[i];</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-pizzaloc-cpp-LC86" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-pizzaloc-cpp-LC87" class="blob-code blob-code-inner js-file-line">\tSumPeop = MaxPeop = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-pizzaloc-cpp-LC88" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-pizzaloc-cpp-LC89" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; NumHous;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-pizzaloc-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; NumHous; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-pizzaloc-cpp-LC91" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-pizzaloc-cpp-LC92" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; XHouse[i] &gt;&gt; YHouse[i] &gt;&gt; NumPeop[i];</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-pizzaloc-cpp-LC93" class="blob-code blob-code-inner js-file-line">\t\tSumPeop += NumPeop[i];</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-pizzaloc-cpp-LC94" class="blob-code blob-code-inner js-file-line">\t\tCount[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-pizzaloc-cpp-LC95" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-pizzaloc-cpp-LC96" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L97" class="blob-num js-line-number" data-line-number="97"></td>\n        <td id="file-pizzaloc-cpp-LC97" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Lưu lại những ngôi nhà mà tại mỗi vị trí, nhà hàng có thể phục vụ</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L98" class="blob-num js-line-number" data-line-number="98"></td>\n        <td id="file-pizzaloc-cpp-LC98" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; NumPlac; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L99" class="blob-num js-line-number" data-line-number="99"></td>\n        <td id="file-pizzaloc-cpp-LC99" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; NumHous; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L100" class="blob-num js-line-number" data-line-number="100"></td>\n        <td id="file-pizzaloc-cpp-LC100" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L101" class="blob-num js-line-number" data-line-number="101"></td>\n        <td id="file-pizzaloc-cpp-LC101" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> temp = (XHouse[i] - XPlace[j])*(XHouse[i] - XPlace[j]) + </td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L102" class="blob-num js-line-number" data-line-number="102"></td>\n        <td id="file-pizzaloc-cpp-LC102" class="blob-code blob-code-inner js-file-line">\t\t\t\t(YHouse[i] - YPlace[j])*(YHouse[i] - YPlace[j]);</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L103" class="blob-num js-line-number" data-line-number="103"></td>\n        <td id="file-pizzaloc-cpp-LC103" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L104" class="blob-num js-line-number" data-line-number="104"></td>\n        <td id="file-pizzaloc-cpp-LC104" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(temp &lt;= R*R) Reach[j][Count[j]++] = i;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L105" class="blob-num js-line-number" data-line-number="105"></td>\n        <td id="file-pizzaloc-cpp-LC105" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L106" class="blob-num js-line-number" data-line-number="106"></td>\n        <td id="file-pizzaloc-cpp-LC106" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L107" class="blob-num js-line-number" data-line-number="107"></td>\n        <td id="file-pizzaloc-cpp-LC107" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Đặt NumRest nhà hàng trong NumPlac vị trí</span></td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L108" class="blob-num js-line-number" data-line-number="108"></td>\n        <td id="file-pizzaloc-cpp-LC108" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">Check</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L109" class="blob-num js-line-number" data-line-number="109"></td>\n        <td id="file-pizzaloc-cpp-LC109" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L110" class="blob-num js-line-number" data-line-number="110"></td>\n        <td id="file-pizzaloc-cpp-LC110" class="blob-code blob-code-inner js-file-line">\tcout &lt;&lt; MaxPeop &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L111" class="blob-num js-line-number" data-line-number="111"></td>\n        <td id="file-pizzaloc-cpp-LC111" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L112" class="blob-num js-line-number" data-line-number="112"></td>\n        <td id="file-pizzaloc-cpp-LC112" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pizzaloc-cpp-L113" class="blob-num js-line-number" data-line-number="113"></td>\n        <td id="file-pizzaloc-cpp-LC113" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/077fcf5993c982517690a69b7c2b0b9f/raw/c51aaf3dbe4239422ad3b94ba869285fc5c78f97/PIZZALOC.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/077fcf5993c982517690a69b7c2b0b9f#file-pizzaloc-cpp">PIZZALOC.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',
id:"F:/Github/the-algorithms-blog/src/posts/2016-10-17---spoj-com-thuat-toan-bai-pizzaloc-pizza-location/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài PIZZALOC - Pizza Location",date:"17/10/2016",categories:["spoj","Quay lui có điều kiện - Backtracking"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","quay lui có điều kiện backtracking"]},fields:{slug:"/spoj-com-thuat-toan-bai-pizzaloc-pizza-location/"},excerpt:"Đề bài: Picko muốn mở một số cửa hàng pizza tại 1 số địa điểm. Bánh pizza sẽ cung cấp cho mọi khách hàng nằm trong hình tròn bán kính…",timeToRead:8},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài NKLETTER - Gửi thư"},fields:{slug:"/spoj-com-thuat-toan-bai-nkletter-gui-thu/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài COINS - Bytelandian gold coins"},fields:{slug:"/spoj-com-thuat-toan-bai-coins-bytelandian-gold-coins/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-pizzaloc-pizza-location/",prevSlug:"/spoj-com-thuat-toan-bai-nkletter-gui-thu/",nextSlug:"/spoj-com-thuat-toan-bai-coins-bytelandian-gold-coins/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-pizzaloc-pizza-location-e8b2e9812ae5dd015305.js.map