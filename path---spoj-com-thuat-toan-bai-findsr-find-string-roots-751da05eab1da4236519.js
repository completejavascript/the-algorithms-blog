webpackJsonp([0xe0e9637bb848],{794:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Trong toán học, căn bậc N của M là một số K thỏa mãn K<sup>N</sup> = M hay K<em>K</em>K...K = M, trong đó có N số K nhân với nhau. Chúng ta có thể chuyển đổi chúng sang áp dụng với xâu. Trong bài toán này, chúng ta sẽ sử dụng ghép xâu thay vì phép nhân. Do đó, căn bậc N của xâu S là một xâu T thỏa mãn T<sup>N</sup> = S, trong đó T<sup>N</sup> = T.T.T.T...T là N xâu T ghép với nhau. Ví dụ nếu xâu S là "abcabcabcabc", với N = 2 thì xâu T = "abcabc" là căn bậc N của S. Và nếu N = 4 thì xâu T = "abc". Chú ý rằng nếu N = 1 thì căn bậc N của S là chính nó. </p>\n<p>Cho trước một xâu S và bạn phải tìm ra số N lớn nhất mà căn bậc N của S tồn tại. Trong ví dụ trên đáp án là N = 4, bởi vì không có số nguyên N nào lớn hơn 4 mà tồn tại căn bặc N của S.</p>\n<h3>Đầu vào:</h3>\n<p>Đầu vào bao gồm nhiều test case, mỗi cái được cho trên một dòng. Mỗi dòng không tồn tại xâu rỗng và có tối đa 10<sup>5 </sup>kí tự, và chỉ bao gồm chữ số và chữ cái thường. Dòng cuối cùng chứa một kí tự \'*\' (không bao gồm \'\').</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra số nguyên duy nhất là kết quả.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>abcabcabcabc\nabcdefgh012\naaaaaaaaaa\n*\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>4\n1\n10\n</code></pre>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/FINDSR/">http://www.spoj.com/problems/FINDSR/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Ở đây yêu cầu là tìm ra số N lớn nhất mà tồn tại căn bậc N của S, nghĩa là độ dài mỗi xâu T phải là nhỏ nhất. Do đó, tôi sẽ xét độ dài của T từ 1 rồi tăng dần lên. Khi nào thỏa mãn thì tôi sẽ dừng lại và đó chính là kết quả cần tìm.</p>\n</li>\n<li>\n<p>Sau đây, mời bạn theo dõi cách triển khai code sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> của tôi.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91920772" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-findsr-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-findsr-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-findsr-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-findsr-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-findsr-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-findsr-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">1000000</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-findsr-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-findsr-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span>*</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-findsr-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Tính độ dài xâu str</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-findsr-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-findsr-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetLength</span>(<span class="pl-k">char</span> *str)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-findsr-cpp-LC10" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-findsr-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> length = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-findsr-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(str[length] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>) length++;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-findsr-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> length;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-findsr-cpp-LC14" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-findsr-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-findsr-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-findsr-cpp-LC17" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-findsr-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-findsr-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-findsr-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-findsr-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">char</span> str[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-findsr-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-findsr-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-findsr-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; str;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-findsr-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> length = <span class="pl-c1">GetLength</span>(str);</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-findsr-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(length == <span class="pl-c1">1</span> &amp;&amp; str[<span class="pl-c1">0</span>] == <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-findsr-cpp-LC27" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-findsr-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> len_sub = <span class="pl-c1">1</span>;\t<span class="pl-c"><span class="pl-c">//</span> Độ dài xâu con T</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-findsr-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> N = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-findsr-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-findsr-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-findsr-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Duyệt từng độ dài của len_sub và tăng dần lên</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-findsr-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(length % len_sub != <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-findsr-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-findsr-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t\t\tlen_sub++;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-findsr-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">continue</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-findsr-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-findsr-cpp-LC38" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-findsr-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Kiểm tra xem với độ dài len_sub như vậy có thỏa mãn hay không</span></td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-findsr-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> id = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-findsr-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">bool</span> check = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-findsr-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-findsr-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\t{\t</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-findsr-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(id + len_sub + <span class="pl-c1">1</span>&gt; length) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-findsr-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; len_sub; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-findsr-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-findsr-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">if</span>(str[i+id] != str[i+len_sub+id])</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-findsr-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-findsr-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\tcheck = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-findsr-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t<span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-findsr-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-findsr-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-findsr-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(check == <span class="pl-c1">false</span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-findsr-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\t\tid += len_sub;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-findsr-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-findsr-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-findsr-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(check == <span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-findsr-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-findsr-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t\t\tN = length / len_sub;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-findsr-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-findsr-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-findsr-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t\t\tlen_sub++;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-findsr-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-findsr-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; N &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-findsr-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-findsr-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-findsr-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-findsr-cpp-LC67" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/67851232100de17c82d9cfc685c5a026/raw/65ff9398f372bc02db62ad6b0626f4c40733d221/FINDSR.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/67851232100de17c82d9cfc685c5a026#file-findsr-cpp">FINDSR.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-12-04---spoj-com-thuat-toan-bai-findsr-find-string-roots/spoj-com-thuat-toan-bai-findsr-find-string-roots.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài FINDSR - Find String Roots",date:"04/12/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-findsr-find-string-roots/"},excerpt:"Đề bài: Trong toán học, căn bậc N của M là một số K thỏa mãn K N  = M hay K K K...K = M, trong đó có N số K nhân với nhau. Chúng ta có thể…",timeToRead:5},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài GCPC11F - Diary"},fields:{slug:"/spoj-com-thuat-toan-bai-gcpc11f-diary/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài FCTRL - Factorial"},fields:{slug:"/spoj-com-thuat-toan-bai-fctrl-factorial/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-findsr-find-string-roots/",prevSlug:"/spoj-com-thuat-toan-bai-gcpc11f-diary/",nextSlug:"/spoj-com-thuat-toan-bai-fctrl-factorial/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-findsr-find-string-roots-751da05eab1da4236519.js.map