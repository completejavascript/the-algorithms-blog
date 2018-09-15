webpackJsonp([29941760194762],{813:function(n,s){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Như chúng ta đã biết Utkarsh rất giỏi giải quyết những bài toán liên quan đến số. Lần này, Arpit đã suy nghĩ một cách khôn ngoan và đã đưa cho Utkarsh một bài toán liên quan đến xâu (string). Arpit đã đưa cho Utkarsh một xâu kí tự và thách thức Utkarsh tìm ra xâu con (substring) dài nhất mà xâu phản chiếu (mirror string) giống với nó, và số lượng những substring này. Bây giờ, Utkarsh  rất bận nên anh ấy nhờ bạn giúp đỡ giải quyết bài toán này. </p>\n<p>Ví dụ về mirror string: cho xâu "lalit" thì xâu phản chiếu là "tilal".</p>\n<h3>Đầu vào:</h3>\n<p>Có T test case, t &#x3C;= 200. Sau đó là T dòng, mỗi dòng chứa những kí tự viết thường từ a-z có độ dài l (1 &#x3C;= l &#x3C;= 3000)</p>\n<h3>Đầu ra:</h3>\n<p>Mỗi test case được in ra trên 1 dòng, bao gồm 2 số nguyên lần lượt là độ dài substring dài nhất thỏa mãn, và số lượng substring loại này.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong> </p>\n<pre><code>3 \nlalit \nabedcdetr \nabcde\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<p>3 1 5 1 1 5 </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/MSUBSTR/">http://www.spoj.com/problems/MSUBSTR/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài này sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> để giải quyết.</p>\n</li>\n<li>\n<p>Vì đề bài yêu cầu tìm ra substring có độ dài dài nhất thỏa mãn là mirror string, nên tôi sẽ kiểm tra tất cả những substring có độ dài bằng độ dài của string ban đầu trước, sau đó giảm dần một đơn vị.</p>\n</li>\n<li>\n<p>Cứ kiểm tra như vậy cho đến khi gặp substring nào thỏa mãn, thì đó là substring dài nhất. Tiếp tục với độ dài substring như vậy để đếm số lượng substring thỏa mãn. Sau đó, thoát luôn mà không cần phải xét tiếp với những độ dài nhỏ hơn.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919512" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-msubstr-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-msubstr-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-msubstr-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-msubstr-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-msubstr-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-msubstr-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">3005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-msubstr-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-msubstr-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GetLength</span>(<span class="pl-k">char</span> *str)</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-msubstr-cpp-LC7" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-msubstr-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> length = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-msubstr-cpp-LC9" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(str[length] != <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\0</span><span class="pl-pds">&#39;</span></span>) length++;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-msubstr-cpp-LC10" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> length;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-msubstr-cpp-LC11" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-msubstr-cpp-LC12" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-msubstr-cpp-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-msubstr-cpp-LC14" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-msubstr-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-msubstr-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span>freopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-msubstr-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T, length, len_sub, numAnswer;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-msubstr-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">char</span> str[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-msubstr-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">bool</span> finish;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-msubstr-cpp-LC20" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-msubstr-cpp-LC21" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-msubstr-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-msubstr-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-msubstr-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; str;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-msubstr-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\tlength\t\t= <span class="pl-c1">GetLength</span>(str);</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-msubstr-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\tlen_sub\t\t= length;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-msubstr-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-msubstr-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-msubstr-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t\tnumAnswer = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-msubstr-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t\tfinish = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-msubstr-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; length; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-msubstr-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-msubstr-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(i + len_sub &gt; length) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-msubstr-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(len_sub == <span class="pl-c1">1</span> || (len_sub == <span class="pl-c1">2</span> &amp;&amp; str[i] == str[i+<span class="pl-c1">1</span>]))</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-msubstr-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-msubstr-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tnumAnswer++;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-msubstr-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tfinish = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-msubstr-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-msubstr-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">else</span> </td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-msubstr-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-msubstr-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">bool</span> check = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-msubstr-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt;= (len_sub - <span class="pl-c1">1</span>)/<span class="pl-c1">2</span>; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-msubstr-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t<span class="pl-k">if</span>(str[j + i] != str[len_sub - <span class="pl-c1">1</span> - j + i])</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-msubstr-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t{ </td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-msubstr-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t\tcheck = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-msubstr-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t\t<span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-msubstr-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-msubstr-cpp-LC48" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-msubstr-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">if</span> (check == <span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-msubstr-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-msubstr-cpp-LC51" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\tnumAnswer++;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-msubstr-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t\tfinish = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-msubstr-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-msubstr-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-msubstr-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-msubstr-cpp-LC56" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span> (finish == <span class="pl-c1">true</span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-msubstr-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span> (len_sub == <span class="pl-c1">1</span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-msubstr-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t\tlen_sub--;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-msubstr-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-msubstr-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; len_sub &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> &lt;&lt; numAnswer &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-msubstr-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-msubstr-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-msubstr-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-msubstr-cpp-LC63" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/39290d009ac77d74bd19997b31f2c8f7/raw/ba64c54da702f0e0e180f1bc0040cfa2a0ce2e44/MSUBSTR.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/39290d009ac77d74bd19997b31f2c8f7#file-msubstr-cpp">MSUBSTR.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-11-06---spoj-com-thuat-toan-bai-msubstr-mirror-strings/spoj-com-thuat-toan-bai-msubstr-mirror-strings.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài MSUBSTR - Mirror Strings !!!",date:"06/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-msubstr-mirror-strings/"},excerpt:"Đề bài: Như chúng ta đã biết Utkarsh rất giỏi giải quyết những bài toán liên quan đến số. Lần này, Arpit đã suy nghĩ một cách khôn ngoan và…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài MKJUMPS - Making Jumps"},fields:{slug:"/spoj-com-thuat-toan-bai-mkjumps-making-jumps/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài NSTEPS - Number Steps"},fields:{slug:"/spoj-com-thuat-toan-bai-nsteps-number-steps/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-msubstr-mirror-strings/",prevSlug:"/spoj-com-thuat-toan-bai-mkjumps-making-jumps/",nextSlug:"/spoj-com-thuat-toan-bai-nsteps-number-steps/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-msubstr-mirror-strings-9d39bfa94ca714212c79.js.map