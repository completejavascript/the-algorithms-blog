webpackJsonp([0xcf5e7f6723dd],{941:function(n,e){n.exports={data:{post:{html:'<h2>Thuật toán kiểm tra một số có phải là số chính phương hay không</h2>\n<p>Tư tưởng là ta sẽ kiểm tra xem các số m từ 1 đến số a xem nếu m*m = a thì số a là số chính phương. Tuy nhiên ta sẽ sử dụng thuật toán chia đôi để nhanh chóng tìm ra kết quả.</p>\n<p><div id="gist91915849" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-is_square_number-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-is_square_number-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-is_square_number-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">IsSquareNumber</span>(<span class="pl-k">int</span> a)</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-is_square_number-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-is_square_number-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> left = <span class="pl-c1">1</span>, right = a, m;</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-is_square_number-cpp-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(left &lt; right)</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-is_square_number-cpp-LC5" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-is_square_number-cpp-LC6" class="blob-code blob-code-inner js-file-line">        m = (left + right) / <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-is_square_number-cpp-LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(m*m &gt; a) right = m - <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-is_square_number-cpp-LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span>(m*m &lt; a) left = m + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-is_square_number-cpp-LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-is_square_number-cpp-LC10" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-is_square_number-cpp-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-is_square_number-cpp-LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-is_square_number-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-is_square_number-cpp-LC13" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/8d0e3acf04782a77cfa03c58ae4e8f3b/raw/a104580116755c0966ef8443ddcda571488711ef/is_square_number.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/8d0e3acf04782a77cfa03c58ae4e8f3b#file-is_square_number-cpp">is_square_number.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán kiểm tra xem một số có là số nguyên tố hay không</h2>\n<p><div id="gist91915857" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-isprimenumber-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-isprimenumber-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-isprimenumber-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">IsPrimeNumber</span>(<span class="pl-k">int</span> a)</td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-isprimenumber-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-isprimenumber-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(a &lt; <span class="pl-c1">2</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-isprimenumber-cpp-LC4" class="blob-code blob-code-inner js-file-line">    </td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-isprimenumber-cpp-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i*i &lt;= a; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-isprimenumber-cpp-LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(a % i == <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-isprimenumber-cpp-LC7" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-isprimenumber-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-isprimenumber-cpp-LC8" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/03fe269b113b72a13119611b2ca8e988/raw/8c96fcd1ef386c5c5324bcf9318b94d15d475ded/IsPrimeNumber.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/03fe269b113b72a13119611b2ca8e988#file-isprimenumber-cpp">IsPrimeNumber.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán tạo một mảng đánh dấu các số nguyên tố không lớn hơn n</h2>\n<p><div id="gist91915870" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-createprimearray-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-createprimearray-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-createprimearray-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span>* <span class="pl-en">CreatePrimeArray</span>(<span class="pl-k">int</span> n)</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-createprimearray-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-createprimearray-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">bool</span> *Prime = <span class="pl-k">new</span> <span class="pl-k">bool</span>[n+<span class="pl-c1">1</span>];</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-createprimearray-cpp-LC4" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-createprimearray-cpp-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt;= n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-createprimearray-cpp-LC6" class="blob-code blob-code-inner js-file-line">        Prime[i] = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-createprimearray-cpp-LC7" class="blob-code blob-code-inner js-file-line">    Prime[<span class="pl-c1">0</span>] = Prime[<span class="pl-c1">1</span>] = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-createprimearray-cpp-LC8" class="blob-code blob-code-inner js-file-line">     </td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-createprimearray-cpp-LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">2</span>; i*i &lt;= n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-createprimearray-cpp-LC10" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(Prime[i] == <span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-createprimearray-cpp-LC11" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-createprimearray-cpp-LC12" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">int</span> j = <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-createprimearray-cpp-LC13" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span>(i*j &lt;= n)</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-createprimearray-cpp-LC14" class="blob-code blob-code-inner js-file-line">            {</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-createprimearray-cpp-LC15" class="blob-code blob-code-inner js-file-line">                Prime[i*j] = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-createprimearray-cpp-LC16" class="blob-code blob-code-inner js-file-line">                j++;</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-createprimearray-cpp-LC17" class="blob-code blob-code-inner js-file-line">            }</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-createprimearray-cpp-LC18" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-createprimearray-cpp-LC19" class="blob-code blob-code-inner js-file-line">     </td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-createprimearray-cpp-LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> Prime;</td>\n      </tr>\n      <tr>\n        <td id="file-createprimearray-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-createprimearray-cpp-LC21" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/37fe43e9f53466a3b541ed79db1242d5/raw/2d1f0795cfd9aa542f45798d2a0939b5d407818d/CreatePrimeArray.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/37fe43e9f53466a3b541ed79db1242d5#file-createprimearray-cpp">CreatePrimeArray.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán tìm ước số chung lớn nhất</h2>\n<p>Ta sẽ tìm ước chung lớn nhất của hai số dựa vào thuật toán Euclid</p>\n<p><div id="gist91915875" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-gcd-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-gcd-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-gcd-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">GCD</span>(<span class="pl-k">int</span> a, <span class="pl-k">int</span> b)</td>\n      </tr>\n      <tr>\n        <td id="file-gcd-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-gcd-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcd-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-gcd-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(a == <span class="pl-c1">0</span> &amp;&amp; b == <span class="pl-c1">0</span>) <span class="pl-k">return</span> -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcd-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-gcd-cpp-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(b == <span class="pl-c1">0</span> || a == <span class="pl-c1">0</span>) <span class="pl-k">return</span> a + b;</td>\n      </tr>\n      <tr>\n        <td id="file-gcd-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-gcd-cpp-LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">GCD</span>(b, a%b);</td>\n      </tr>\n      <tr>\n        <td id="file-gcd-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-gcd-cpp-LC6" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/c0909ae349b6f1c2170829c824b91ac0/raw/673ed380511bb91cf1e0375c18c5b588bafc5f6a/GCD.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/c0909ae349b6f1c2170829c824b91ac0#file-gcd-cpp">GCD.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán tìm bội số chung nhỏ nhất </h2>\n<p>Ta sẽ tìm bội số chung nhỏ nhất dựa vào thuật toán tìm ước số chung lớn nhất như trên</p>\n<p><div id="gist91915880" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-lcm-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-lcm-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-lcm-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">LCM</span>(<span class="pl-k">int</span> a, <span class="pl-k">int</span> b)</td>\n      </tr>\n      <tr>\n        <td id="file-lcm-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-lcm-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-lcm-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-lcm-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(a == <span class="pl-c1">0</span> || b == <span class="pl-c1">0</span>) <span class="pl-k">return</span> -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-lcm-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-lcm-cpp-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (<span class="pl-c1">abs</span>(a * b) / <span class="pl-c1">GCD</span>(a, b));</td>\n      </tr>\n      <tr>\n        <td id="file-lcm-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-lcm-cpp-LC5" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/42ff12d38e324657634055c1caf8adea/raw/589d2cc901b0c3798c845474a49b9f5b68239d91/LCM.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/42ff12d38e324657634055c1caf8adea#file-lcm-cpp">LCM.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán tính giai thừa: n!</h2>\n<p><div id="gist91915890" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-factorial-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-factorial-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-factorial-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">Factorial</span>(<span class="pl-k">int</span> n)</td>\n      </tr>\n      <tr>\n        <td id="file-factorial-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-factorial-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-factorial-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-factorial-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> r = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-factorial-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-factorial-cpp-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-factorial-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-factorial-cpp-LC5" class="blob-code blob-code-inner js-file-line">        r *= i;</td>\n      </tr>\n      <tr>\n        <td id="file-factorial-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-factorial-cpp-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> r;</td>\n      </tr>\n      <tr>\n        <td id="file-factorial-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-factorial-cpp-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/58ec0635e9897be421a5ea29d4196eb0/raw/30784435ad2bfd261663cac1e43a3b6a9a1b3b3f/Factorial.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/58ec0635e9897be421a5ea29d4196eb0#file-factorial-cpp">Factorial.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<h2>Thuật toán tính tổ hợp chập k của n: C(k,n)</h2>\n<p><div id="gist91915895" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-combination-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-combination-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-combination-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">Combination</span>(<span class="pl-k">int</span> k, <span class="pl-k">int</span> n)</td>\n      </tr>\n      <tr>\n        <td id="file-combination-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-combination-cpp-LC2" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-combination-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-combination-cpp-LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> r = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-combination-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-combination-cpp-LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= k; i++,n--)</td>\n      </tr>\n      <tr>\n        <td id="file-combination-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-combination-cpp-LC5" class="blob-code blob-code-inner js-file-line">        r = r * n / i;</td>\n      </tr>\n      <tr>\n        <td id="file-combination-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-combination-cpp-LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> r;</td>\n      </tr>\n      <tr>\n        <td id="file-combination-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-combination-cpp-LC7" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/a387c49aba48e83f5f0659c547dfa0c0/raw/210b1b7405cc3afc79f372c7b9f27f881bb938d5/Combination.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/a387c49aba48e83f5f0659c547dfa0c0#file-combination-cpp">Combination.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p>Code by Phạm Văn Lâm</p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-09-23---tong-hop-mot-so-thuat-toan-co-ban/tong-hop-mot-so-thuat-toan-co-ban.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Tổng hợp một số thuật toán cơ bản",date:"23/09/2016",categories:["Thuật toán cơ bản"],tags:["phạm văn lâm","thuật toán cơ bản"]},fields:{slug:"/tong-hop-mot-so-thuat-toan-co-ban/"},excerpt:"Thuật toán kiểm tra một số có phải là số chính phương hay không Tư tưởng là ta sẽ kiểm tra xem các số m từ 1 đến số a xem nếu m*m = a thì số…",timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM - Thuật toán bài ABCPATH - ABC Path"},fields:{slug:"/spoj-com-thuat-toan-bai-abcpath-abc-path/"}},nextPost:{frontmatter:{title:"Tổng hợp một số thuật toán cơ bản về sắp xếp - Phần 2"},fields:{slug:"/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-2/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/tong-hop-mot-so-thuat-toan-co-ban/",prevSlug:"/spoj-com-thuat-toan-bai-abcpath-abc-path/",nextSlug:"/tong-hop-mot-so-thuat-toan-co-ban-ve-sap-xep-phan-2/"}}}});
//# sourceMappingURL=path---tong-hop-mot-so-thuat-toan-co-ban-7d669583f1563d3f12fa.js.map