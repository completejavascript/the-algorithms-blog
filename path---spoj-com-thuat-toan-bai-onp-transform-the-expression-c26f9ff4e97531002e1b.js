webpackJsonp([0xa05b103696a1],{821:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Biến đổi biểu thức đại số sau thành dạng "kí pháp nghịch đảo Ba Lan" (RPN  : Reverse Polish Notation). Hay nói cách khác là biến đổi biểu thức từ dạng trung tố thành dạng hậu tố. Trong đó, các toán tử hai ngôi: +, -, <em>, /, ^ (có độ ưu tiên từ thấp nhất lên cao nhất), dấu ngoặc (), toán hạng chỉ bao gồm chữ cái a, b, c,...z. Giả sử rằng chỉ có một dạng RPN, không có trường hợp kiểu như a</em>b*c.</p>\n<h3>Đầu vào:</h3>\n<p><em>T</em> [số lượng biểu thức &#x3C;= <strong>100</strong>] </p>\n<p><em>Biểu thức</em> [độ dài &#x3C;= <strong>400</strong>] </p>\n<p>[Những biểu thức khác] Thành phần ở trong dấu [] không xuất hiện ở đầu vào.</p>\n<h3>Đầu ra:</h3>\n<p>Các biểu thức dạng RPN, mỗi cái trên một dòng.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>3\n(a+(b*c))\n((a+b)*(z+x))\n((a+t)*((b+(a+c))^(c+d)))\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>abc*+\nab+zx+*\nat+bac++cd+^*\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/ONP/">http://www.spoj.com/problems/ONP/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Đây là bài toán cơ bản, có thể xếp vào bài toán sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a>.</p>\n</li>\n<li>\n<p>Thuật toán biến đổi biểu thức trung tố thành dạng hậu tố sử dụng Stack là:</p>\n<ul>\n<li><strong>Nếu là toán hạng:</strong> cho ra output.</li>\n<li><strong>Nếu là dấu mở ngoặc “(“:</strong> cho vào stack</li>\n<li><strong>Nếu là dấu đóng ngoặc “)”:</strong> lấy các toán tử trong stack ra và cho vào output cho đến khi gặp dấu mở ngoặc “(“. (Dấu mở ngoặc cũng phải được đưa ra khỏi stack)</li>\n<li>\n<p><strong>Nếu là toán tử:</strong></p>\n<ul>\n<li>Chừng nào ở đỉnh stack là toán tử và toán tử đó có độ ưu tiên <strong>lớn hơn hoặc bằng</strong> toán tử hiện tại thì lấy toán tử đó ra khỏi stack và cho ra output.</li>\n<li>Đưa toán tử hiện tại vào stack Sau khi duyệt hết biểu thức trung tố, nếu trong stack còn phần tử thì lấy các thành phần trong đó ra và cho lần lượt vào output. <em>(Tham khảo tại: <a href="https://yinyangit.wordpress.com/2011/01/26/algorithm-chuy%E1%BB%83n-bi%E1%BB%83u-th%E1%BB%A9c-trung-t%E1%BB%91-sang-ti%E1%BB%81n-t%E1%BB%91-va-h%E1%BA%ADu-t%E1%BB%91-b%E1%BA%B1ng-stack/">YinYang\'s Programming Blog</a>)</em></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919416" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-onp-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-onp-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-onp-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-onp-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-onp-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-onp-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">405</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-onp-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-onp-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Trả về true nếu kí tự ch là toán hạng</span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-onp-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">IsOperand</span>(<span class="pl-k">char</span> ch)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-onp-cpp-LC8" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-onp-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> (ch &gt;= <span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span> &amp;&amp; ch &lt;= <span class="pl-s"><span class="pl-pds">&#39;</span>z<span class="pl-pds">&#39;</span></span>);</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-onp-cpp-LC10" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-onp-cpp-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-onp-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Trả về true nếu kí tự ch là toán tử</span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-onp-cpp-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">IsOperator</span>(<span class="pl-k">char</span> ch)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-onp-cpp-LC14" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-onp-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(ch == <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span> || ch == <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span> || ch == <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span> || ch == <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> || ch == <span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-onp-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-onp-cpp-LC17" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-onp-cpp-LC18" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-onp-cpp-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Trả về độ ưu tiên cho các toán tử</span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-onp-cpp-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetPriority</span>(<span class="pl-k">char</span> ch)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-onp-cpp-LC21" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-onp-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(ch == <span class="pl-s"><span class="pl-pds">&#39;</span>+<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-onp-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(ch == <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-onp-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(ch == <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">3</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-onp-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(ch == <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">4</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-onp-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(ch == <span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-c1">5</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-onp-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-onp-cpp-LC28" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-onp-cpp-LC29" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-onp-cpp-LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Trả về độ dài xâu str</span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-onp-cpp-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetLength</span>(<span class="pl-k">char</span> *str)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-onp-cpp-LC32" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-onp-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> length = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-onp-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(str[length] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>) length++;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-onp-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> length;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-onp-cpp-LC36" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-onp-cpp-LC37" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-onp-cpp-LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-onp-cpp-LC39" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-onp-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-onp-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-onp-cpp-LC42" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-onp-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-onp-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">char</span> str[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-onp-cpp-LC45" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-onp-cpp-LC46" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-onp-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-onp-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-onp-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; str;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-onp-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> length = <span class="pl-c1">GetLength</span>(str);</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-onp-cpp-LC51" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-onp-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">char</span> *stack = <span class="pl-k">new</span> <span class="pl-k">char</span>[length + <span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-onp-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> st_size = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-onp-cpp-LC54" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-onp-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Thực hiện theo thuật toán</span></td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-onp-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; length; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-onp-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-onp-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(<span class="pl-c1">IsOperand</span>(str[i]))</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-onp-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-onp-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t\t\tcout &lt;&lt; str[i];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-onp-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-onp-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>) </td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-onp-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-onp-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\t\t\tstack[st_size++] = str[i];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-onp-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-onp-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(str[i] == <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-onp-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-onp-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">while</span> (stack[st_size-<span class="pl-c1">1</span>] != <span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-onp-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-onp-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tcout &lt;&lt; stack[st_size-<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-onp-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tst_size--;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-onp-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-onp-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t\t\tst_size--;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-onp-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-onp-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">IsOperator</span>(str[i]))</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-onp-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-onp-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">while</span>(<span class="pl-c1">IsOperator</span>(stack[st_size-<span class="pl-c1">1</span>]) &amp;&amp; </td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-onp-cpp-LC78" class="blob-code blob-code-inner js-file-line">\t\t\t\t        (<span class="pl-c1">GetPriority</span>(stack[st_size-<span class="pl-c1">1</span>]) &gt;= <span class="pl-c1">GetPriority</span>(str[i])))</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-onp-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-onp-cpp-LC80" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tcout &lt;&lt; stack[st_size-<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-onp-cpp-LC81" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tst_size--;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-onp-cpp-LC82" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-onp-cpp-LC83" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-onp-cpp-LC84" class="blob-code blob-code-inner js-file-line">\t\t\t\tstack[st_size] = str[i];</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-onp-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t\t\t\tst_size++;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-onp-cpp-LC86" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-onp-cpp-LC87" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-onp-cpp-LC88" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-onp-cpp-LC89" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">delete[]</span> stack;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-onp-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-onp-cpp-LC91" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-onp-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-onp-cpp-LC92" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/e3d7a94c31cdc8a32ae362de1c1001bc/raw/e55c690e2179d3f89710872ae0e221e5761c627c/ONP.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/e3d7a94c31cdc8a32ae362de1c1001bc#file-onp-cpp">ONP.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-11-05---spoj-com-thuat-toan-bai-onp-transform-the-expression/spoj-com-thuat-toan-bai-onp-transform-the-expression.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài ONP - Transform the Expression",date:"05/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-onp-transform-the-expression/"},excerpt:'Đề bài: Biến đổi biểu thức đại số sau thành dạng "kí pháp nghịch đảo Ba Lan" (RPN  : Reverse Polish Notation). Hay nói cách khác là biến đổi…',timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài NUMPATH - Gutibazi"},fields:{slug:"/spoj-com-thuat-toan-bai-numpath-gutibazi/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài PQUEUE - Printer Queue"},fields:{slug:"/spoj-com-thuat-toan-bai-pqueue-printer-queue/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-onp-transform-the-expression/",prevSlug:"/spoj-com-thuat-toan-bai-numpath-gutibazi/",nextSlug:"/spoj-com-thuat-toan-bai-pqueue-printer-queue/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-onp-transform-the-expression-c26f9ff4e97531002e1b.js.map