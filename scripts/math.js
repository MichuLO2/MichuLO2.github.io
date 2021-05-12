function calculate()
	{
		var a1 = document.getElementById("init").value;
		var r = document.getElementById("difference").value;
		var n = document.getElementById("length").value;
		var text = "";
		
		if (n>0)
		{
			for (i = 1; i <= n; i++)
				{
					text += +a1 + (i-1)*r + ", ";
				}
			document.getElementById("result").innerHTML = text;
		}
		else if (n<0)
		{
			text = "n nie może być mniejsze od 0";
			document.getElementById("result").innerHTML = text;
		}
		else
		{
			text = "";
			document.getElementById("result").innerHTML = text;
		}
	}