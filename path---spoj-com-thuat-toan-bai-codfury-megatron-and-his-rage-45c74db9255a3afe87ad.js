webpackJsonp([0x9a023211ca74],{799:function(n,t){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Bị làm tức điên lên sau thất bại bởi cuộc tấn công của Decepticons, Megatron đã quyết định phá hủy tất cả những hành tinh trên đường trở về trái đất từ Cybertron. Có nhiều hành tinh giữa trái đất và Cybertron. Mỗi hành tinh có một vài con robot canh giữ trên đó. Bởi vì Megatron còn rất ít đạn dược nên anh ta muốn tấn công với ít robot nhất có thể. Biết anh ta không thể tấn công quá M robot. </p>\n<p>Bạn hãy tìm ra số lớn nhất của những hành tinh mà anh ta có thể phá hủy trên hành trình của mình. </p>\n<p>Chú ý: Megatron có thể bắt đầu cuộc tấn công từ bất kì một hành tinh nào. Và anh ta chỉ có thể di chuyển đến hành tinh bên cạnh hành tinh hiện tại anh ta đang ở đó.</p>\n<h3>Đầu vào:</h3>\n<p>Đầu tiên là số T, là số lượng test case, T &#x3C;= 20. Sau đó là T test case. Mỗi test case bắt đầu bằng một dòng chứa 2 số nguyên P và M. Trong đó, P là số lượng hành tinh và M là số lượng hành tinh tối đa mà anh ta có thể phá hủy. Với P &#x3C;= 50000 và M &#x3C;= 1000000. Sau đó là một dòng chứa P số nguyên phân biệt nhau bởi dấu cách, miêu tả số lượng robot trên mỗi hành tinh, giá trị này &#x3C;= 1000.</p>\n<h3>Đầu ra:</h3>\n<p>Đầu ra sẽ bao gồm T cặp số nguyên, một cặp trên một dòng xác định số lượng robot mà Megatron sẽ đánh và số hành tinh anh ta phá hủy.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>1\n4 50\n20 5 23 45\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>48 3\n</code></pre>\n<h3>Giải thích:</h3>\n<ul>\n<li>\n<p>Megatron bắt đầu từ hành tinh số 1, sau đó là hành tinh số 2, 3. Tại điểm này anh ta đã đánh được 48 robot. Lúc này anh ta đã phá hủy được 3 hành tinh rồi.</p>\n</li>\n<li>\n<p>Megatron có thể bắt đầu từ hành tinh số 2 sau đó đến hành tinh số 3, 4. Tuy nhiên lúc này anh ta phải đánh 73 robot. Tuy nhiên anh ta muốn đánh số robot ít nhất nên anh ta sẽ chọn đánh từ hành tinh số 1 đến 2, 3. </p>\n</li>\n</ul>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/CODFURY/">http://www.spoj.com/problems/CODFURY/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>Bài toán này sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> để giải. Cụ thể hơn là sử dụng phương pháp dịch cửa sổ. Cửa sổ ở đây có kích thước là M. Và ta sẽ dịch từ đầu đến cuối, rồi tìm ra trường hợp nào cho tổng robot là nhỏ nhất.</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91920534" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-codfury-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-codfury-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-codfury-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>stdio.h<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-codfury-cpp-LC2" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-codfury-cpp-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-codfury-cpp-LC4" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-codfury-cpp-LC5" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T, P, M;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-codfury-cpp-LC6" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>,&amp;T);</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-codfury-cpp-LC7" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-codfury-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-codfury-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d%d<span class="pl-pds">&quot;</span></span>,&amp;P,&amp;M);</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-codfury-cpp-LC10" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-codfury-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> *a = <span class="pl-k">new</span> <span class="pl-k">int</span>[P];</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-codfury-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; P; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-codfury-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c1">scanf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d<span class="pl-pds">&quot;</span></span>,&amp;a[i]);</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-codfury-cpp-LC14" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-codfury-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> st = <span class="pl-c1">0</span>, i = <span class="pl-c1">0</span>, sum = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-codfury-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> max_plannet = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-codfury-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> min_ammo = M + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-codfury-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(i &lt; P)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-codfury-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-codfury-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t\t\tsum += a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-codfury-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(sum &gt; M)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-codfury-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-codfury-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">int</span> temp = i - st;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-codfury-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">int</span> t = sum - a[i];</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-codfury-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(temp &gt; max_plannet)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-codfury-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-codfury-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tmax_plannet = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-codfury-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tmin_ammo = t;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-codfury-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-codfury-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(temp == max_plannet)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-codfury-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-codfury-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tmax_plannet = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-codfury-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">if</span> (t &lt; min_ammo) min_ammo = t;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-codfury-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-codfury-cpp-LC35" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-codfury-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">while</span>(sum &gt;= M)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-codfury-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-codfury-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tsum -= a[st];</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-codfury-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tst++;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-codfury-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-codfury-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-codfury-cpp-LC42" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-codfury-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\ti++;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-codfury-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-codfury-cpp-LC45" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-codfury-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> temp = i - st;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-codfury-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(temp &gt; max_plannet)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-codfury-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-codfury-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t\tmax_plannet = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-codfury-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t\tmin_ammo = sum;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-codfury-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-codfury-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> <span class="pl-k">if</span>(temp == max_plannet)</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-codfury-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-codfury-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\tmax_plannet = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-codfury-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span> (sum &lt; min_ammo) min_ammo = sum;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-codfury-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-codfury-cpp-LC57" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-codfury-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">printf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%d %d<span class="pl-cce">\\n</span><span class="pl-pds">&quot;</span></span>,min_ammo,max_plannet);</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-codfury-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">delete[]</span> a;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-codfury-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-codfury-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-codfury-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-codfury-cpp-LC62" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/a1888bcf33259880e97456a6d4f06a57/raw/aa0515087541d3a719b262c97780de7299766e48/CODFURY.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/a1888bcf33259880e97456a6d4f06a57#file-codfury-cpp">CODFURY.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h3><em>Code by Phạm Văn Lâm.</em></h3>',id:"f:/Github/the-algorithms-blog/src/posts/2016-12-01---spoj-com-thuat-toan-bai-codfury-megatron-and-his-rage/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài CODFURY - Megatron and his rage",date:"01/12/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy","dịch cửa sổ"]},fields:{slug:"/spoj-com-thuat-toan-bai-codfury-megatron-and-his-rage/"},excerpt:"Đề bài: Bị làm tức điên lên sau thất bại bởi cuộc tấn công của Decepticons, Megatron đã quyết định phá hủy tất cả những hành tinh trên đường…",timeToRead:5},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài CTAIN - Containers"},fields:{slug:"/spoj-com-thuat-toan-bai-ctain-containers/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài CUBEFR - Cube Free Numbers"},fields:{slug:"/spoj-com-thuat-toan-bai-cubefr-cube-free-numbers/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-codfury-megatron-and-his-rage/",prevSlug:"/spoj-com-thuat-toan-bai-ctain-containers/",nextSlug:"/spoj-com-thuat-toan-bai-cubefr-cube-free-numbers/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-codfury-megatron-and-his-rage-45c74db9255a3afe87ad.js.map