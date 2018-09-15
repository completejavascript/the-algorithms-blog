webpackJsonp([0xf646d750f9f8],{804:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Cho một mảng gồm N phần tử là số nguyên dương, phân biệt <code>A[0....N-1]</code>. Nếu i &#x3C; j và <code>A[i] > A[j]</code> thì cặp (i, j) gọi là một cặp đảo nghịch. Cho số N và mảng A. Nhiệm vụ của bạn là tìm ra số cặp đảo nghịch.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số nguyên t - số lượng test case, theo sau là một khoảng trống. Mỗi test case bắt đầu bằng số N, N &#x3C;= 200000. Sau đó là N + 1 dòng, với dòng thứ i là phần tử <code>A[i - 1], A[i - 1] &#x3C;= 10^7</code>. Dòng thứ N + 1 là dòng trống.</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case in ra trên 1 dòng là số cặp đảo nghịch.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>2\n\n3\n3\n1\n2\n\n5\n2\n3\n8\n6\n1\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>2\n5\n</code></pre>\n<h3>Giải thích:</h3>\n<ul>\n<li>Test case 1: có 2 cặp đảo nghịch là (3, 1) và (3, 2)</li>\n<li>Test case 2: có 5 cặp đảo nghịch là (2, 1), (3, 1), (8, 6), (8, 1) và (6, 1) </li>\n</ul>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/INVCNT/">http://www.spoj.com/problems/INVCNT/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Tôi sẽ sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> để giải bài toán. Cụ thể hơn là tôi sẽ sử dụng <a href="/the-algorithms-blog/tag/sap-xep-tron-merge-sort/">thuật toán sắp xếp trộn Merge Sort</a> để giải quyết.</p>\n</li>\n<li>\n<p>Tôi sẽ sắp xếp dãy đã cho theo thứ tự giảm dần. Và trong quá trình trộn tôi sẽ cập nhật kết quả. Nghe tới đây có vẻ khó hiểu, xin mời bạn theo dõi code dưới đây để hiểu rõ hơn.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919800" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-invcnt-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-invcnt-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-invcnt-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-invcnt-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-invcnt-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-invcnt-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">200005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-invcnt-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-invcnt-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">long</span> <span class="pl-k">long</span> Answer;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-invcnt-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N, T;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-invcnt-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> A[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-invcnt-cpp-LC9" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-invcnt-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Merge</span>(<span class="pl-k">int</span> *a, <span class="pl-k">int</span> left, <span class="pl-k">int</span> m, <span class="pl-k">int</span> right)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-invcnt-cpp-LC11" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-invcnt-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> *temp = <span class="pl-k">new</span> <span class="pl-k">int</span>[right - left + <span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-invcnt-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> k = <span class="pl-c1">0</span>, i = left, j = m + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-invcnt-cpp-LC14" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-invcnt-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(i &lt;= m &amp;&amp; j &lt;= right)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-invcnt-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-invcnt-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(a[i] &gt; a[j])</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-invcnt-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-invcnt-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t\ttemp[k++] = a[i++];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-invcnt-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-invcnt-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Rõ ràng ở đây i &lt; j mà a[i] &gt; a[j]</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-invcnt-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> thì ta đã có cặp đảo nghịch ở đây.</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-invcnt-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Hơn nữa, bạn để ý rằng, vì tôi sắp xếp dãy giảm dần</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-invcnt-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> nên nếu a[i] &gt; a[j] thì a[i] cũng sẽ lớn hơn các số ở nhánh phải</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-invcnt-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> chú ý là tôi đang trộn 2 nhánh đã sắp xếp, nên a[j] là số lớn nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-invcnt-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> nghĩa là tôi có thêm (right - j + 1) cặp đảo nghịch</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-invcnt-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\tAnswer += right - j + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-invcnt-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-invcnt-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> </td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-invcnt-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-invcnt-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t\ttemp[k++] = a[j++];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-invcnt-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-invcnt-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-invcnt-cpp-LC34" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-invcnt-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(i &lt;= m) temp[k++] = a[i++];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-invcnt-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(j &lt;= right) temp[k++] = a[j++];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-invcnt-cpp-LC37" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-invcnt-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; k; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-invcnt-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\ta[i + left] = temp[i];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-invcnt-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">delete[]</span> temp;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-invcnt-cpp-LC41" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-invcnt-cpp-LC42" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-invcnt-cpp-LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">MergeSort</span>(<span class="pl-k">int</span> *a, <span class="pl-k">int</span> left, <span class="pl-k">int</span> right)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-invcnt-cpp-LC44" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-invcnt-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> m;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-invcnt-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(left &lt; right)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-invcnt-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-invcnt-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\tm = (left + right) / <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-invcnt-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">MergeSort</span>(a, left, m);</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-invcnt-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">MergeSort</span>(a, m + <span class="pl-c1">1</span>, right);</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-invcnt-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">Merge</span>(a, left, m, right);</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-invcnt-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-invcnt-cpp-LC53" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-invcnt-cpp-LC54" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-invcnt-cpp-LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-invcnt-cpp-LC56" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-invcnt-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-invcnt-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-invcnt-cpp-LC59" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-invcnt-cpp-LC60" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-invcnt-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-invcnt-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-invcnt-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span>input</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-invcnt-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\tAnswer = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-invcnt-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; N;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-invcnt-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-invcnt-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; A[i];</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-invcnt-cpp-LC68" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-invcnt-cpp-LC69" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> implementing code below</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-invcnt-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">MergeSort</span>(A, <span class="pl-c1">0</span>, N-<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-invcnt-cpp-LC71" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-invcnt-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span>output</span></td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-invcnt-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; Answer &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-invcnt-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-invcnt-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-invcnt-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-invcnt-cpp-LC76" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/0618995e67c850d9f8838482d09d1289/raw/be90905cf686cf10425cc70f1ef26d96ea88a6a4/INVCNT.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/0618995e67c850d9f8838482d09d1289#file-invcnt-cpp">INVCNT.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-11-08---spoj-com-thuat-toan-bai-invcnt-inversion-count/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài INVCNT - Inversion Count",date:"08/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","sắp xếp trộn Merge Sort","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-invcnt-inversion-count/"},excerpt:"Đề bài: Cho một mảng gồm N phần tử là số nguyên dương, phân biệt  A[0....N-1] . Nếu i < j và  A[i] > A[j]  thì cặp (i, j) gọi là một cặp đảo…",timeToRead:5},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài RENT - Rent your airplane and make money"},fields:{slug:"/spoj-com-thuat-toan-bai-rent-rent-your-airplane-and-make-money/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài KOIREP - Representatives"},fields:{slug:"/spoj-com-thuat-toan-bai-koirep-representatives/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-invcnt-inversion-count/",prevSlug:"/spoj-com-thuat-toan-bai-rent-rent-your-airplane-and-make-money/",nextSlug:"/spoj-com-thuat-toan-bai-koirep-representatives/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-invcnt-inversion-count-10fd330c9f7e8e0ba890.js.map