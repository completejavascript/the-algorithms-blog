webpackJsonp([29571468587240],{826:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Một tập hợp những con chuột thí nghiệm đang được huấn luyện để thoát khỏi mê cung. Mê cung được tạo bởi những ô, mà mỗi ô được kết nối tới những ô khác. Tuy nhiên, sẽ có những vật cản trên đường đi giữa các ô. Vì vậy, sẽ cần thêm thời gian để vượt qua những vật cản này. Một vài đường chỉ cho phép con chuột đi theo một chiều và không có đường vòng. </p>\n<p>Giả sử là tất cả lũ chuột đã được huấn luyện, khi được đặt ở một ô bất kì trên mê cung, tìm đường để đưa chúng ra khỏi mê cung với thời gian ngắn nhất. </p>\n<p>Chúng ta sẽ làm một thí nghiệm như sau: mỗi một con chuột được đặt vào một ô trên mê cung và một đồng hồ đếm ngược được bắt đầu. Khi đồng hồ dừng lại, đếm số chuột thoát ra được mê cung. </p>\n<p><strong>Vấn đề:</strong> </p>\n<p>Viết một chương trình, cho trước thông tin của những con chuột và thời gian giới hạn. Dự đoán số chuột thoát ra được khỏi mê cung. Giả sử rằng sẽ không có nút thắt cổ chai nào trên mê cung, tất cả các ô sẽ có đủ khoảng trống để chứa số lượng chuột ngẫu nhiên.</p>\n<h3>Đầu vào:</h3>\n<p>Các ô trong mê cung được đánh số từ 1 đến N, trong đó N là số lượng ô, N &#x3C;= 100. Ba dòng đầu tiên chứa số N - số lượng ô, E - chỉ số của ô lối thoát và giá trị T là thời gian bắt đầu của đồng hồ đếm ngược. </p>\n<p>Dòng thứ 4 là số M - số lượng kết nối trong mê cung. Sau đó là M dòng. Mỗi dòng xác định 1 kết nối, bao gồm 3 số là số a, b và c. Trong đó a, b là chỉ số của các ô (a, b thuộc từ 1 đến N), và c là thời gian cần để đi từ a đến b. </p>\n<p>Chú ý rằng mỗi kết nối là một chiều, tức là con chuột không thể đi từ b về a trừ khi có kết nối từ b đến a. Cũng chú ý là, thời gian di chuyển trên mỗi hướng là khác nhau.</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case in ra trên một dòng, là số lượng chuột đến được ô thoát Exit của mê cung trong thời gian T.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>4 \n2 \n1\n8\n1 2 1\n1 3 1\n2 1 1\n2 4 1\n3 1 1\n3 4 1\n4 2 1\n4 3 1\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<p>3</p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/MICEMAZE/">http://www.spoj.com/problems/MICEMAZE/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Theo suy luận thông thường, tôi sẽ phải xét mỗi con chuột, tìm đường đi ngắn nhất của nó đến ô thoát. Kiểm tra xem thời gian đó có nhỏ hơn hoặc bằng thời gian giới hạn T hay không. Nếu thỏa mãn thì con chuột đó sẽ thoát được khỏi mê cung trong thời gian cho phép. Tuy nhiên, nếu xét riêng từng con như vậy, chắc chắn sẽ bị time limit.</p>\n</li>\n<li>\n<p>Bài toán ở đây là tìm đường đi ngắn nhất từ N điểm đến 1 điểm. Thực chất, tôi sẽ quy về bài toán tìm đường đi ngắn nhất từ 1 điểm đến N điểm. Bằng cách đảo ngược lại chiều của các đường đi. </p>\n</li>\n<li>\n<p>Để tìm đường đi ngắn nhất từ một điểm đến N điểm, tôi sử dụng <a href="/the-algorithms-blog/category/thuat-toan-dijkstra/">thuật toán Dijkstra</a></p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919618" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-micemaze-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-micemaze-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-micemaze-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-micemaze-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-micemaze-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-micemaze-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX_INT = <span class="pl-c1">1</span> &lt;&lt; <span class="pl-c1">20</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-micemaze-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">105</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-micemaze-cpp-LC6" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-micemaze-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N, M, E, T;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-micemaze-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Matrix[MAX][MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-micemaze-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Mark[MAX], Value[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-micemaze-cpp-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-micemaze-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">FindIdMinValue</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-micemaze-cpp-LC12" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-micemaze-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> idm = <span class="pl-c1">0</span>, _min = MAX_INT;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-micemaze-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-micemaze-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Mark[i] == <span class="pl-c1">0</span> &amp;&amp; Value[i] &lt; _min)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-micemaze-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-micemaze-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t\t_min = Value[i];</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-micemaze-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t\tidm  = i;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-micemaze-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-micemaze-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> idm;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-micemaze-cpp-LC21" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-micemaze-cpp-LC22" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-micemaze-cpp-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Dijkstra</span>(<span class="pl-k">int</span> start)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-micemaze-cpp-LC24" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-micemaze-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> cnt = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-micemaze-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-micemaze-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-micemaze-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\tMark[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-micemaze-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\tValue[i] = MAX_INT;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-micemaze-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-micemaze-cpp-LC31" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-micemaze-cpp-LC32" class="blob-code blob-code-inner js-file-line">\tValue[start] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-micemaze-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(cnt &lt; N)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-micemaze-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-micemaze-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> idmin = <span class="pl-c1">FindIdMinValue</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-micemaze-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\tMark[idmin] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-micemaze-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\tcnt++;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-micemaze-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-micemaze-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(Mark[i] == <span class="pl-c1">0</span> &amp;&amp; Matrix[idmin][i] &gt; <span class="pl-c1">0</span> &amp;&amp; </td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-micemaze-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\t\tValue[idmin] + Matrix[idmin][i] &lt; Value[i])</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-micemaze-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t\tValue[i] = Value[idmin] + Matrix[idmin][i];</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-micemaze-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-micemaze-cpp-LC43" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-micemaze-cpp-LC44" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-micemaze-cpp-LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-micemaze-cpp-LC46" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-micemaze-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-micemaze-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-micemaze-cpp-LC49" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-micemaze-cpp-LC50" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; N &gt;&gt; E &gt;&gt; T &gt;&gt; M;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-micemaze-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-micemaze-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">1</span>; j &lt;= N; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-micemaze-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t\tMatrix[i][j] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-micemaze-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-micemaze-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> a, b, t;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-micemaze-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; M; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-micemaze-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-micemaze-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; a &gt;&gt; b &gt;&gt; t;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-micemaze-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\tMatrix[b][a] = t;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-micemaze-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-micemaze-cpp-LC61" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-micemaze-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> implementing code</span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-micemaze-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">Dijkstra</span>(E);</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-micemaze-cpp-LC64" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-micemaze-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Đếm những ô có giá trị &lt;= T</span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-micemaze-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> là những ô con chuột có thể thoát.</span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-micemaze-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> Answer = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-micemaze-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-micemaze-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Value[i] &lt;= T) Answer++;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-micemaze-cpp-LC70" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-micemaze-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> output</span></td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-micemaze-cpp-LC72" class="blob-code blob-code-inner js-file-line">\tcout &lt;&lt; Answer &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-micemaze-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-micemaze-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-micemaze-cpp-LC74" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/0aa61f4f21a6c32dd73da0c0321e1794/raw/89075425cad95f422b44f17fc385bcdf1d8bdcd6/MICEMAZE.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/0aa61f4f21a6c32dd73da0c0321e1794#file-micemaze-cpp">MICEMAZE.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-11-06---spoj-com-thuat-toan-bai-micemaze-mice-and-maze/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài MICEMAZE - Mice and Maze",date:"06/11/2016",categories:["spoj","Thuật toán Dijkstra"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","thuật toán Dijkstra"]},fields:{slug:"/spoj-com-thuat-toan-bai-micemaze-mice-and-maze/"},excerpt:"Đề bài: Một tập hợp những con chuột thí nghiệm đang được huấn luyện để thoát khỏi mê cung. Mê cung được tạo bởi những ô, mà mỗi ô được kết…",timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài LASTDIG - The last digit"},fields:{slug:"/spoj-com-thuat-toan-bai-lastdig-the-last-digit/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài MKEQUAL - Make them equal !"},fields:{slug:"/spoj-com-thuat-toan-bai-mkequal-make-them-equal/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-micemaze-mice-and-maze/",prevSlug:"/spoj-com-thuat-toan-bai-lastdig-the-last-digit/",nextSlug:"/spoj-com-thuat-toan-bai-mkequal-make-them-equal/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-micemaze-mice-and-maze-87e3615819679bffacf9.js.map