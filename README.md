# Demo Amadeus API

Demo Ionic For Amadeus API

## Demo

Clone

```
git clone https://github.com/humbertodias/java-amadeus-api-demo.git
```

Enter

```
cd java-amadeus-api-demo
```

Start
```
ionic serve
```

On Browser

```
http://localhost:8100/
```

Home

![Home](doc/home.png)

Form Flight

![Form](doc/voo-form.png)


### Flight Inspiration Search

```
APIKEY="YOUR_API_KEY"
DEPARTURE_DATE=$(date "+%Y-%m-%d")
ORIGIN="NYC"
DESTINATION="BOB"
curl -k -X GET "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=$APIKEY&origin=$ORIGIN&destination=$DESTINATION&departure_date=$DEPARTURE_DATE"
```


### output

```
{
  "origin" : "NYC",
  "currency" : "USD",
  "results" : [ {
    "destination" : "BOB",
    "departure_date" : "2018-02-28",
    "return_date" : "2018-03-14",
    "price" : "2203.80",
    "airline" : "QF"
  } ]
}
```

## References

[https://sandbox.amadeus.com/api-catalog](https://sandbox.amadeus.com/api-catalog)

[https://ionicframework.com/docs/v2/components/](https://ionicframework.com/docs/v2/components/)
