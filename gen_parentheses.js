
/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = (n) => {

    const ans = [];
    
    const backtrack = (cur, open, close, max) => {


        console.log(`Current parenthesis: ${cur}, open: ${open}, close: ${close}`);
        if(cur.length === max * 2){
            ans.push(cur);
            return;
        }
        
        if(open < max)
            backtrack(cur+"(", open+1, close, max);
        if(close < open)
            backtrack(cur+")", open, close+1, max);

    }
    
    backtrack("", 0, 0, n);
    
    return ans;
    
}

generateParenthesis(3);