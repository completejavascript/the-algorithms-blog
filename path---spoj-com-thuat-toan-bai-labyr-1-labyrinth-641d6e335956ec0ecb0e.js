webpackJsonp([53061798406298],{806:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Phía bắc của kim tự tháp chứa một mê cung rất lớn và phức tạp. Mê cung được chia thành những khối hình vuông, mỗi phần trong chúng được phủ bởi đá hoặc để trống. Có những cái móc nhỏ ở giữa mỗi khu vực trống. ACM phát hiện ra rằng 2 cái móc phải được kết nối với nhau bằng dây thừng, chạy xuyên qua những cái móc ở mỗi khu trống, trên đường nối giữa những cái được kết nối với nhau. Khi những cái thừng được gắn chặt thì một cánh cửa bí mật sẽ được mở ra. Vấn đề đặt ra là chúng ta không biết những cái móc nào để kết nối. Điều đó cũng có nghĩa là độ dài cần thiết của dây thừng cũng không biết. Nhiệm vụ của bạn là tìm ra độ dài lớn nhất có thể của dây cần thiết.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số T - số lượng test case. Mỗi test case bao gồm 2 số C và R (3 &#x3C;= C,R &#x3C;= 1000) là số cột và số hàng. Sau đó là R dòng, mỗi dòng bao gồm C kí tự. Những kí tự này xác định ra mê cung. Mỗi cái trong chúng là \'<strong>#\'</strong> hoặc \'<strong>.\'</strong>. Trong đó, ## miêu tả đá, còn dấu . miêu tả khu vực trống. Biết rằng chỉ có thể di chuyển giữa những khu vực kề nhau (khu vực kề nhau là khu vực có cạnh chung). Không thể di chuyển chéo và cũng không thể đi ra ngoài mê cung. </p>\n<p>Mê cung được thiết kế sao cho chỉ có chính xác 1 đường giữa 2 khu vực trống. Do đó, nếu như tìm thấy những cái móc thích hợp thì rất dễ để tìm ra đường đúng để nối chúng.</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case in ra trên 1 dòng duy nhất, theo dạng sau:</p>\n<p>Maximum rope length is X.</p>\n<p>Trong đó, x là độ dài đường dài nhất giữa 2 khu vực trống.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n3 3\n###\n#.#\n###\n7 6\n#######\n#.#.###\n#.#.###\n#.#.#.#\n#.....#\n#######\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>Maximum rope length is 0.\nMaximum rope length is 8.\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/LABYR1/">http://www.spoj.com/problems/LABYR1/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài toán sử dụng <a href="/the-algorithms-blog/category/tim-kiem-theo-chieu-rong-bfs/">thuật toán tìm kiếm theo chiều rộng BFS</a> để giải quyết. Cụ thể là tôi sẽ áp dụng 2 lần BFS.</p>\n</li>\n<li>\n<p>Lần thứ nhất tôi sử dụng BFS tại một điểm bất kì. Từ đó tìm ra được điểm có khoảng cách xa nhất so với điểm bắt đầu.</p>\n</li>\n<li>\n<p>Tiếp tục sử dụng thuật toán BFS tại điểm vừa tìm được. Tôi lại tìm được điểm có khoảng cách xa nhất so với điểm bắt đầu trong trường hợp thứ hai này. Lần này, khoảng cách xa nhất chính là cái cần tìm.</p>\n</li>\n<li>\n<p>Thực chất đây là thuật toán tìm đường đi dài nhất trên cây.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919662" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-labyr1-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-labyr1-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-labyr1-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-labyr1-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-labyr1-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-labyr1-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">1005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-labyr1-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX_QUEUE = MAX*MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-labyr1-cpp-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-labyr1-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> C, R, T, Answer, SR, SC;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-labyr1-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Matrix[MAX][MAX], Mark[MAX][MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-labyr1-cpp-LC9" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-labyr1-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typedef</span> <span class="pl-k">struct</span></td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-labyr1-cpp-LC11" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-labyr1-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> row;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-labyr1-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> col;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-labyr1-cpp-LC14" class="blob-code blob-code-inner js-file-line">}<span class="pl-c1">Point</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-labyr1-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-labyr1-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Point</span> queue[MAX_QUEUE];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-labyr1-cpp-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> fr, re, leng;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-labyr1-cpp-LC18" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-labyr1-cpp-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Enqueue</span>(<span class="pl-k">int</span> row, <span class="pl-k">int</span> col)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-labyr1-cpp-LC20" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-labyr1-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">Point</span> p;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-labyr1-cpp-LC22" class="blob-code blob-code-inner js-file-line">\tp.<span class="pl-smi">row</span> = row;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-labyr1-cpp-LC23" class="blob-code blob-code-inner js-file-line">\tp.<span class="pl-smi">col</span> = col;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-labyr1-cpp-LC24" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-labyr1-cpp-LC25" class="blob-code blob-code-inner js-file-line">\tqueue[re] = p;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-labyr1-cpp-LC26" class="blob-code blob-code-inner js-file-line">\tre = (re + <span class="pl-c1">1</span>) % MAX_QUEUE;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-labyr1-cpp-LC27" class="blob-code blob-code-inner js-file-line">\tleng++;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-labyr1-cpp-LC28" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-labyr1-cpp-LC29" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-labyr1-cpp-LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Point</span> <span class="pl-en">Dequeue</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-labyr1-cpp-LC31" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-labyr1-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">Point</span> p = queue[fr];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-labyr1-cpp-LC33" class="blob-code blob-code-inner js-file-line">\tfr = (fr + <span class="pl-c1">1</span>) % MAX_QUEUE;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-labyr1-cpp-LC34" class="blob-code blob-code-inner js-file-line">\tleng--;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-labyr1-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> p;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-labyr1-cpp-LC36" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-labyr1-cpp-LC37" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-labyr1-cpp-LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> drow[] = {-<span class="pl-c1">1</span>,<span class="pl-c1">0</span>,<span class="pl-c1">1</span>, <span class="pl-c1">0</span>};</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-labyr1-cpp-LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> dcol[] = { <span class="pl-c1">0</span>,<span class="pl-c1">1</span>,<span class="pl-c1">0</span>,-<span class="pl-c1">1</span>};</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-labyr1-cpp-LC40" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-labyr1-cpp-LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> BFS tại điểm (row, col) tới tất cả các điểm còn lại</span></td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-labyr1-cpp-LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">BFS</span>(<span class="pl-k">int</span> row, <span class="pl-k">int</span> col)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-labyr1-cpp-LC43" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-labyr1-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; R; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-labyr1-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; C; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-labyr1-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t\tMark[i][j] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-labyr1-cpp-LC47" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-labyr1-cpp-LC48" class="blob-code blob-code-inner js-file-line">\tfr = re = leng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-labyr1-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">Enqueue</span>(row, col);</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-labyr1-cpp-LC50" class="blob-code blob-code-inner js-file-line">\tMark[row][col] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-labyr1-cpp-LC51" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-labyr1-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(leng &gt; <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-labyr1-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-labyr1-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">Point</span> p = <span class="pl-c1">Dequeue</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-labyr1-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; <span class="pl-c1">4</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-labyr1-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-labyr1-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> r = p.<span class="pl-smi">row</span> + drow[i];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-labyr1-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> c = p.<span class="pl-smi">col</span> + dcol[i];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-labyr1-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(r &gt;= <span class="pl-c1">0</span> &amp;&amp; r &lt; R &amp;&amp; c &gt;= <span class="pl-c1">0</span> &amp;&amp; c &lt; C &amp;&amp; </td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-labyr1-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t\t\tMark[r][c] == <span class="pl-c1">0</span> &amp;&amp; Matrix[r][c] == <span class="pl-c1">1</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-labyr1-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-labyr1-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t\t\t\tMark[r][c] = Mark[p.<span class="pl-smi">row</span>][p.<span class="pl-smi">col</span>] + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-labyr1-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c1">Enqueue</span>(r,c);</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-labyr1-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-labyr1-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-labyr1-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-labyr1-cpp-LC67" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-labyr1-cpp-LC68" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-labyr1-cpp-LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Tìm điểm có khoảng cách xa nhất so với điểm xét ban đầu.</span></td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-labyr1-cpp-LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">FindMax</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-labyr1-cpp-LC71" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-labyr1-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; R; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-labyr1-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; C; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-labyr1-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(Mark[i][j] &gt; Answer)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-labyr1-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-labyr1-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t\t\tAnswer = Mark[i][j];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-labyr1-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\t\t\tSR = i;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-labyr1-cpp-LC78" class="blob-code blob-code-inner js-file-line">\t\t\t\tSC = j;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-labyr1-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-labyr1-cpp-LC80" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-labyr1-cpp-LC81" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-labyr1-cpp-LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-labyr1-cpp-LC83" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-labyr1-cpp-LC84" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-labyr1-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-labyr1-cpp-LC86" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-labyr1-cpp-LC87" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-labyr1-cpp-LC88" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-labyr1-cpp-LC89" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-labyr1-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t\tAnswer = SR = SC = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-labyr1-cpp-LC91" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; C &gt;&gt; R;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-labyr1-cpp-LC92" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; R; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-labyr1-cpp-LC93" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-labyr1-cpp-LC94" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">char</span> temp[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-labyr1-cpp-LC95" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; temp;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-labyr1-cpp-LC96" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; C; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L97" class="blob-num js-line-number" data-line-number="97"></td>\n        <td id="file-labyr1-cpp-LC97" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L98" class="blob-num js-line-number" data-line-number="98"></td>\n        <td id="file-labyr1-cpp-LC98" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(temp[j] == <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>) Matrix[i][j] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L99" class="blob-num js-line-number" data-line-number="99"></td>\n        <td id="file-labyr1-cpp-LC99" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(temp[j] == <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L100" class="blob-num js-line-number" data-line-number="100"></td>\n        <td id="file-labyr1-cpp-LC100" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L101" class="blob-num js-line-number" data-line-number="101"></td>\n        <td id="file-labyr1-cpp-LC101" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tMatrix[i][j] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L102" class="blob-num js-line-number" data-line-number="102"></td>\n        <td id="file-labyr1-cpp-LC102" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tSR = i;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L103" class="blob-num js-line-number" data-line-number="103"></td>\n        <td id="file-labyr1-cpp-LC103" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tSC = j;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L104" class="blob-num js-line-number" data-line-number="104"></td>\n        <td id="file-labyr1-cpp-LC104" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L105" class="blob-num js-line-number" data-line-number="105"></td>\n        <td id="file-labyr1-cpp-LC105" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L106" class="blob-num js-line-number" data-line-number="106"></td>\n        <td id="file-labyr1-cpp-LC106" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L107" class="blob-num js-line-number" data-line-number="107"></td>\n        <td id="file-labyr1-cpp-LC107" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L108" class="blob-num js-line-number" data-line-number="108"></td>\n        <td id="file-labyr1-cpp-LC108" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">BFS</span>(SR,SC);</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L109" class="blob-num js-line-number" data-line-number="109"></td>\n        <td id="file-labyr1-cpp-LC109" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">FindMax</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L110" class="blob-num js-line-number" data-line-number="110"></td>\n        <td id="file-labyr1-cpp-LC110" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L111" class="blob-num js-line-number" data-line-number="111"></td>\n        <td id="file-labyr1-cpp-LC111" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">BFS</span>(SR,SC);</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L112" class="blob-num js-line-number" data-line-number="112"></td>\n        <td id="file-labyr1-cpp-LC112" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">FindMax</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L113" class="blob-num js-line-number" data-line-number="113"></td>\n        <td id="file-labyr1-cpp-LC113" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L114" class="blob-num js-line-number" data-line-number="114"></td>\n        <td id="file-labyr1-cpp-LC114" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>Maximum rope length is <span class="pl-pds">&quot;</span></span> &lt;&lt; Answer - <span class="pl-c1">1</span> &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L115" class="blob-num js-line-number" data-line-number="115"></td>\n        <td id="file-labyr1-cpp-LC115" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L116" class="blob-num js-line-number" data-line-number="116"></td>\n        <td id="file-labyr1-cpp-LC116" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-labyr1-cpp-L117" class="blob-num js-line-number" data-line-number="117"></td>\n        <td id="file-labyr1-cpp-LC117" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/5aeb0298aa5385361befdd77a8459a42/raw/ad25f96ffdacbae62551d9a95dbc93124b3840c8/LABYR1.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/5aeb0298aa5385361befdd77a8459a42#file-labyr1-cpp">LABYR1.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',
id:"F:/Github/the-algorithms-blog/src/posts/2016-11-07---spoj-com-thuat-toan-bai-labyr1-labyrinth/spoj-com-thuat-toan-bai-labyr1-labyrinth.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài LABYR1 - Labyrinth",date:"07/11/2016",categories:["spoj","Tìm kiếm theo chiều rộng - BFS"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","Đường đi dài nhất trên đồ thị","tìm kiếm theo chiều rộng bfs"]},fields:{slug:"/spoj-com-thuat-toan-bai-labyr1-labyrinth/"},excerpt:"Đề bài: Phía bắc của kim tự tháp chứa một mê cung rất lớn và phức tạp. Mê cung được chia thành những khối hình vuông, mỗi phần trong chúng…",timeToRead:7},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài KOIREP - Representatives"},fields:{slug:"/spoj-com-thuat-toan-bai-koirep-representatives/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài LASTDIG - The last digit"},fields:{slug:"/spoj-com-thuat-toan-bai-lastdig-the-last-digit/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-labyr1-labyrinth/",prevSlug:"/spoj-com-thuat-toan-bai-koirep-representatives/",nextSlug:"/spoj-com-thuat-toan-bai-lastdig-the-last-digit/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-labyr-1-labyrinth-641d6e335956ec0ecb0e.js.map