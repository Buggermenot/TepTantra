code_file = "code.txt"


code_html = ""
with open(code_file, 'r') as code:
    for i, line in enumerate(code.readlines()):
        code_html += f'<div class="ace_line" style="height: 15px; top: {15*i}px;"><span class="ace_string">{line.strip('\n')}</span></div>'

print("Paste the following into the console window:\n\n")
print(f'document.getElementsByClassName("ace_layer ace_text-layer")[0].innerHTML = {code_html}\n\n')