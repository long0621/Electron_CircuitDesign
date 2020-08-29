import sys 
import json


def calVoltage(current,resistance):
    return int(current)*int(resistance)

result = {
    'voltage': calVoltage(sys.argv[1],sys.argv[2])
  }

json = json.dumps(result)

print(str(json))
sys.stdout.flush()
