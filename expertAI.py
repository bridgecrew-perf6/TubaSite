
import os
import sys
os.environ["EAI_USERNAME"] = 'tototototoman@gmail.com'
os.environ["EAI_PASSWORD"] = 'pUfver-rodkoj-zigso7'
from expertai.nlapi.cloud.client import ExpertAiClient
client = ExpertAiClient()
text = sys.argv[0] 
language= 'en'

document = client.specific_resource_analysis(
    body={"document": {"text": text}}, 
    params={'language': language, 'resource': 'sentiment'})

print("sentiment:", document.sentiment.overall)
sys.stdout.flush()