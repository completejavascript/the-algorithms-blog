webpackJsonp([0xdb0b2cb60fe0],{833:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Màn hình ống cũ máy tính của bạn hóa ra là nguyên nhân gây ra đau đầu mãn tính của bạn. Do đó bạn quyết định mua một trong những màn hình TFT phẳng mới. Tại lối vào của cửa hàng máy tính, bạn thấy rằng có khá đông đủ khách hàng. </p>\n<p>(Câu tiếp theo tôi không hiểu lắm. Tuy nhiên nó không quan trọng, nên tôi sẽ bỏ qua. Nếu các bạn hiểu câu này nói gì, vui lòng viết dưới phần bình luận để mọi người cùng hiểu nhé.) Bởi vì, bạn muốn về nhà sớm để hoàn thành công việc còn dang dở ở trên SPOJ; nên bạn muốn lé tránh đám đông được nhiều nhất có thể. Bạn xem xét tình hình ở một vài nơi và nhận ra rằng đám đông là ít hơn ở một vài chỗ ở cửa hàng. Đó là lí do cho bạn để hy vọng rằng bạn sẽ đến đích đúng giờ, với quãng đường đi ngắn nhất. Nhưng đường đi ngắn nhất là đường nào? </p>\n<p>Bạn phác họa tình hình trên một miếng giấy. Tuy nhiên nó vẫn là một vấn đề khó. Bạn lấy ra một cuốn sổ trong túi và viết một chương trình để tìm đường đi ngắn nhất cho bạn.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên của đầu vào miêu tả chiều rộng w và chiều dài h của cửa hàng. Cả hai chiều đều không vượt quá 25. h dòng tiếp theo, mỗi dòng chứa w kí tự. Trong đó, kí tự \'S\' miêu tả cái giá, kí tự \'S\' là vị trí bắt đầu và kí tự \'D\' là đích đến (ví dụ là một hình vuông phía trước những màn hình). Tất cả  những khối hình vuông trống được đánh số từ 1 đến 9 - là số giây cần để vượt qua khu vực hình vuông đó. </p>\n<p>Có rất nhiều test case và được ngăn cách nhau bởi dòng trống. Đầu vào kết thúc bởi giá trị độ rộng và chiều dài là 0 0.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra giá trị số giây nhỏ nhất để đi được tới đích. Mỗi test case in ra trên một dòng riêng biệt. Bạn có thể di chuyển theo chiều ngang hay chiều dọc. Dĩ nhiên, bạn phải di chuyển bên trong của ma trận. Và luôn có đường để tới đích.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>4 3\nX1S3\n42X4\nX1D2\n\n5 5\nS5213\n2X2X5\n51248\n4X4X2\n1445D\n\n0 0\n</code></pre>\n<p><strong>Đầu ra</strong>:</p>\n<pre><code>4\n23\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/SHOP/">http://www.spoj.com/problems/SHOP/</a></em></p>\n<h3>Phân tích:</h3>\n<p>Đây là bài toán tìm đường đi ngắn nhất cơ bản trên ma trận. Nó tương đương với bài toán tìm đường đi ngắn nhất của đồ thị có trọng số (vì các đường đi có giá khác nhau). Vì vậy, tôi sử dụng <a href="/the-algorithms-blog/category/thuat-toan-dijkstra/">thuật toán Dijkstra</a> để giải quyết bài toán.</p>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu.  Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91918738" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-shop-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-shop-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-shop-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-shop-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-shop-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-shop-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX_INT = <span class="pl-c1">1</span>&lt;&lt;<span class="pl-c1">20</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-shop-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">30</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-shop-cpp-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-shop-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> w, h;               <span class="pl-c"><span class="pl-c">//</span> Kích thước ma trận</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-shop-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> SR, SC, DR, DC;     <span class="pl-c"><span class="pl-c">//</span> Lần lượt là hàng, cột của điểm bắt đầu, kết thúc</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-shop-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> number;             <span class="pl-c"><span class="pl-c">//</span> Số lượng điểm mà bạn có thể đi vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-shop-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Matrix[MAX][MAX];   <span class="pl-c"><span class="pl-c">//</span> Ma trận đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-shop-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Distance[MAX][MAX]; <span class="pl-c"><span class="pl-c">//</span> Ma trận khoảng cách sau khi áp dụng Dijkstra</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-shop-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> Mark[MAX][MAX];    <span class="pl-c"><span class="pl-c">//</span> Ma trận đánh dấu</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-shop-cpp-LC13" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-shop-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-shop-cpp-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Tìm điểm chưa thăm, có thể đi và giá trị ma trận khoảng cách là nhỏ nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-shop-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Tham số dạng tham chiếu để lưu tọa độ hàng, cột tìm được</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-shop-cpp-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-shop-cpp-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">FindMin</span>(<span class="pl-k">int</span> &amp;rmin, <span class="pl-k">int</span> &amp;cmin)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-shop-cpp-LC19" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-shop-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> _min = MAX_INT;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-shop-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; h; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-shop-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; w; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-shop-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(Mark[i][j] == <span class="pl-c1">false</span> &amp;&amp; Matrix[i][j] != -<span class="pl-c1">1</span> &amp;&amp; Distance[i][j] &lt; _min)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-shop-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-shop-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t\t\t_min = Distance[i][j];</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-shop-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\t\trmin = i;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-shop-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\t\tcmin = j;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-shop-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-shop-cpp-LC29" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-shop-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-shop-cpp-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> drow[] = {-<span class="pl-c1">1</span>,<span class="pl-c1">0</span>,<span class="pl-c1">1</span>, <span class="pl-c1">0</span>};</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-shop-cpp-LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> dcol[] = { <span class="pl-c1">0</span>,<span class="pl-c1">1</span>,<span class="pl-c1">0</span>,-<span class="pl-c1">1</span>};</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-shop-cpp-LC33" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-shop-cpp-LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-shop-cpp-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Thuật toán Dijkstra tại điểm bắt đầu là (sr, sc)</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-shop-cpp-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-shop-cpp-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Dijkstra</span>(<span class="pl-k">int</span> sr, <span class="pl-k">int</span> sc)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-shop-cpp-LC38" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-shop-cpp-LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Đếm số điểm đã xét, khi duyệt hết các điểm có thể thì dừng</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-shop-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> cnt = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-shop-cpp-LC41" class="blob-code blob-code-inner js-file-line">\tDistance[sr][sc] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-shop-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span> (cnt &lt; number)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-shop-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-shop-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> rmin = <span class="pl-c1">0</span>, cmin = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-shop-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">FindMin</span>(rmin,cmin);</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-shop-cpp-LC46" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-shop-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\tMark[rmin][cmin] = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-shop-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\tcnt++;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-shop-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; <span class="pl-c1">4</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-shop-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-shop-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> r = rmin + drow[i];</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-shop-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> c = cmin + dcol[i];</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-shop-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>( r &gt;= <span class="pl-c1">0</span> &amp;&amp; r &lt; h &amp;&amp; c &gt;= <span class="pl-c1">0</span> &amp;&amp; c &lt; w &amp;&amp;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-shop-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\t    Mark[r][c] == <span class="pl-c1">false</span> &amp;&amp; Matrix[r][c] != -<span class="pl-c1">1</span> &amp;&amp; </td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-shop-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t    Distance[rmin][cmin] + Matrix[r][c] &lt; Distance[r][c]</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-shop-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t\t    )</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-shop-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t\tDistance[r][c] = Distance[rmin][cmin] + Matrix[r][c];</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-shop-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-shop-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-shop-cpp-LC60" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-shop-cpp-LC61" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-shop-cpp-LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-shop-cpp-LC63" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-shop-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-shop-cpp-LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>\tfreopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-shop-cpp-LC66" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-shop-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-shop-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-shop-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; w &gt;&gt; h;\t</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-shop-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(w==<span class="pl-c1">0</span> &amp;&amp; h==<span class="pl-c1">0</span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-shop-cpp-LC71" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-shop-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t\tSR = SC = DR = DC = number = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-shop-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; h; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-shop-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-shop-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">char</span> temp[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-shop-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; temp;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-shop-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; w; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-shop-cpp-LC78" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-shop-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(temp[j]==<span class="pl-s"><span class="pl-pds">&#39;</span>X<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-shop-cpp-LC80" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-shop-cpp-LC81" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tMatrix[i][j] = -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-shop-cpp-LC82" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tnumber++;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-shop-cpp-LC83" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-shop-cpp-LC84" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(temp[j]==<span class="pl-s"><span class="pl-pds">&#39;</span>S<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-shop-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-shop-cpp-LC86" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tMatrix[i][j] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-shop-cpp-LC87" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tSR = i;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-shop-cpp-LC88" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tSC = j;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-shop-cpp-LC89" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-shop-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(temp[j]==<span class="pl-s"><span class="pl-pds">&#39;</span>D<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-shop-cpp-LC91" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-shop-cpp-LC92" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tMatrix[i][j] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-shop-cpp-LC93" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tDR = i;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-shop-cpp-LC94" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tDC = j;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-shop-cpp-LC95" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-shop-cpp-LC96" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> Matrix[i][j] = temp[j] - <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L97" class="blob-num js-line-number" data-line-number="97"></td>\n        <td id="file-shop-cpp-LC97" class="blob-code blob-code-inner js-file-line">\t\t\t\tDistance[i][j] = MAX_INT;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L98" class="blob-num js-line-number" data-line-number="98"></td>\n        <td id="file-shop-cpp-LC98" class="blob-code blob-code-inner js-file-line">\t\t\t\tMark[i][j] = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L99" class="blob-num js-line-number" data-line-number="99"></td>\n        <td id="file-shop-cpp-LC99" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L100" class="blob-num js-line-number" data-line-number="100"></td>\n        <td id="file-shop-cpp-LC100" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L101" class="blob-num js-line-number" data-line-number="101"></td>\n        <td id="file-shop-cpp-LC101" class="blob-code blob-code-inner js-file-line">\t\tnumber = w*h - number;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L102" class="blob-num js-line-number" data-line-number="102"></td>\n        <td id="file-shop-cpp-LC102" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">Dijkstra</span>(SR,SC);</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L103" class="blob-num js-line-number" data-line-number="103"></td>\n        <td id="file-shop-cpp-LC103" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; Distance[DR][DC] &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L104" class="blob-num js-line-number" data-line-number="104"></td>\n        <td id="file-shop-cpp-LC104" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L105" class="blob-num js-line-number" data-line-number="105"></td>\n        <td id="file-shop-cpp-LC105" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-shop-cpp-L106" class="blob-num js-line-number" data-line-number="106"></td>\n        <td id="file-shop-cpp-LC106" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/53c7cc9fda1e89ac5e9c795f03dd75e5/raw/0d817c53e63cc9e07217a679f1a1e3360380dd49/SHOP.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/53c7cc9fda1e89ac5e9c795f03dd75e5#file-shop-cpp">SHOP.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',
id:"F:/Github/the-algorithms-blog/src/posts/2016-11-03---spoj-com-thuat-toan-bai-shop-shopping/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài SHOP - Shopping",date:"03/11/2016",categories:["spoj","Thuật toán Dijkstra"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","thuật toán Dijkstra"]},fields:{slug:"/spoj-com-thuat-toan-bai-shop-shopping/"},excerpt:"Đề bài: Màn hình ống cũ máy tính của bạn hóa ra là nguyên nhân gây ra đau đầu mãn tính của bạn. Do đó bạn quyết định mua một trong những màn…",timeToRead:7},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài SERGRID - Grid"},fields:{slug:"/spoj-com-thuat-toan-bai-sergrid-grid/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ANARC05B - The Double HeLiX"},fields:{slug:"/spoj-com-thuat-toan-bai-anarc05b-the-double-helix/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-shop-shopping/",prevSlug:"/spoj-com-thuat-toan-bai-sergrid-grid/",nextSlug:"/spoj-com-thuat-toan-bai-anarc05b-the-double-helix/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-shop-shopping-a4b675ec8e73d1e3a5c4.js.map